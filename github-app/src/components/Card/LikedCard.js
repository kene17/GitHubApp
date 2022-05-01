import React from "react";
import { FaInfo } from "react-icons/fa";
import { Form, Icon, Image, Card } from "semantic-ui-react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./LikedCard.css";
const LikedCard = ({
  name,
  avatar,
  userName,
  followers,
  repos,
  following,
}) => {
  return (
    <div className="card">
      <div className="card-container">
      <div className="img-container-actions">
      <div className="modal-content">
        {" "}
        <Card >
          <Image src={avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Header>{userName}</Card.Header>
          </Card.Content>
          <Card.Component extra><button>
            <FavoriteIcon sx={{ color: "white", fontSize: "3rem" }} />
          </button></Card.Component>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {followers} Followers
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {repos} Repos
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              {following} following
            </a>
          </Card.Content>
          
          
        </Card>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LikedCard ;
