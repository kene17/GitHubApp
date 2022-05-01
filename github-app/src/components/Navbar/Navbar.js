import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Badge } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MyContext } from '../../context';
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
    const {likedData, setLikedData} = useContext(MyContext);
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
    return (
        <nav>
      {(toggleMenu || screenWidth > 500) && (
        <div className="navbar">
        <div styled={{fontSize: "80px"}}>Github Search<Icon name="github" /></div>
        
        <div className="underline">
              <Link to="/search/user">Users</Link>
            </div>
            <div className="underline">
              <Link to="/search/org">Organisations</Link>
            </div>
            <div>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={likedData.length} color="error">
              <div className="underline">
              <Link ><FavoriteIcon /></Link>
            </div>
                
              </Badge>
            </IconButton></div> </div>
      )}

      </nav>
  
       
        

    )
}

export default Navbar
