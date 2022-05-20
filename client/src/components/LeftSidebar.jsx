import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item style={{ cursor: "pointer" }}>
        <Link to="/employees">Employee List</Link>
      </ListGroup.Item>
      <ListGroup.Item style={{ cursor: "pointer" }}>
        <Link to="/classes">Today's Class</Link>
      </ListGroup.Item>
      <ListGroup.Item style={{ cursor: "pointer" }}>
        <Link to="/activities">Activity List</Link>
      </ListGroup.Item>
      <ListGroup.Item style={{ cursor: "pointer" }}>
        Post Activity
      </ListGroup.Item>
      <ListGroup.Item style={{ cursor: "pointer" }}>
        Apply for List
      </ListGroup.Item>
      <ListGroup.Item style={{ cursor: "pointer" }}>Late List</ListGroup.Item>
    </ListGroup>
  );
};

export default LeftSidebar;
