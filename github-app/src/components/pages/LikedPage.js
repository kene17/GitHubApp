import React, { useContext } from "react";
import { MyContext } from "../../context";
import LikedCard from "../Card/LikedCard";
const LikedPage = () => {
  const { likedData } = useContext(MyContext);
  const test = () => {
    console.log(likedData);
  };
  return (
    <div>
      <button onClick={test}>kene</button>
    </div> 
    // <button onClick={test} style={{color:"white"}}>kene</button>
  );
};

export default LikedPage;
