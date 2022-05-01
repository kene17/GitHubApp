import React, { createContext, useState } from "react";
export const MyContext = createContext();
const AppContext = ({ children }) => {
  const [apod, setApod] = useState([]);
  const [name2, setname2] = useState("")
  const [follower2, setfollower2] = useState("")
  const [avatar2, setavatar2] = useState("")
  const [repos2, setrepos2] = useState("")

  
  const [likedData, setLikedData] = useState([]);
  const [isClick, setisClick] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  return (
    <MyContext.Provider
      value={{
        apod, 
        setApod,
        name2,
        follower2,
        avatar2,
        repos2,
        setavatar2,
        setfollower2,
        setrepos2,
        setname2,
        setError,
        likedData,
        setLikedData,
        isClick,
        setisClick,
        userInput,
        setUserInput,
        error, 
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
