import React from "react";

import {  Icon, Image, Card } from "semantic-ui-react";

import "./Card.css";
const CardComponent = ({
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

export default CardComponent;
