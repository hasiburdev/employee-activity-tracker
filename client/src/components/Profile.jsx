import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Profile = () => {
  return (
    <Card>
      <Card.Img variant="top" src="./profile.png" />
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong>Name: </strong>Hasibur Rahman
          </ListGroupItem>
          <ListGroupItem>
            <strong>Designation: </strong>Full-stack Developer
          </ListGroupItem>
          <ListGroupItem>
            <strong>Office Time: </strong>11:00AM-8:00PM
          </ListGroupItem>
          <ListGroupItem>
            <strong>Off Day: </strong>Sunday
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Profile;
