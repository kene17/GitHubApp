import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Card, Form, Icon, Image } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/pages/UserPage";
import OrgPage from "./components/pages/OrgPage";
import Footer from "./components/Footer/Footer";
import LikedPage from "./components/pages/LikedPage";
function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact>
            <UserPage />
          </Route>
          <Route path="/search/user">
          <UserPage />
       
          </Route> <div className="list">
          <Route path="/search/org">
          <OrgPage />

          </Route></div>
          <Route path="/likedpage">
          <LikedPage />

          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )

  
}

export default App;
