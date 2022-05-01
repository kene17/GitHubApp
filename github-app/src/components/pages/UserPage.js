import { Button, Card, Form, Icon, Image } from "semantic-ui-react";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./UserPage.css";
import { MyContext } from "../../context";
import LoadingSpiner from "../SpinnerComponent/LoadingSpiner"
const UserPage = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("")
  const [like, setLike] = useState(false);
  const {likedData, setLikedData} = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataHandler = async () => {
        setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://api.github.com/users/kene17"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
          setError(error)
        console.log(error);
      }
    };
    fetchDataHandler();
  }, []);

  const setData = ({ name, login, followers, public_repos, avatar_url, repos_url, following }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(repos_url)
  };


  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError("");
        }
      });
  };

  const likeHandler =(name,  followers,  avatar, repos)=>{
      const card = {
        name:{name},  followers:{followers},  avatar:{avatar}, repos:{repos}
      }
      const arr = [...likedData, card];
      setLikedData(arr);
  }

  return (
    <div className="App">
      
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search"
              name="name"
              onChange={handleSearch}
            />

            <Form.Button content="Search" color="red"/>
          </Form.Group>
        </Form>
      </div>
      {!error ?  (
        <div className="card">
          <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header>{userName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {followers} Followers
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="replyd" />
                {repos} Repos
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {following} following
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="location arrow" />
                <a href={location}>{location} </a>
             
                
              </a>
            </Card.Content>
            <Card.Content extra>
            <Button color='red' onClick={likeHandler}>
        <Icon name='heart' />
        Like
      </Button>
            </Card.Content>
          </Card>
        </div>
      ): <h1 style={{color:"white", display:"flex", justifyContent:"center", marginBottom: "60px"}}>Please Enter a Valid User</h1>}
      {!isLoading && setData.length === 0 && !error && (
        <p>Found No Users Found</p>
      )}
      <div className="spinner-container">{isLoading && <LoadingSpiner />}</div>
    </div>
  );
};

export default UserPage;
