import React, { useState, useEffect } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import axios from "axios";

let activityData = [];

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/activities"
      );
      activityData = data;
      setActivities(data);
    };
    getActivities();
  }, []);

  useEffect(() => {
    const searchResult = activityData.filter((activity) => {
      let result =
        activity.name.toLowerCase().includes(search.toLowerCase()) ||
        activity.time.toLowerCase().includes(search.toLowerCase()) ||
        activity.details.toLowerCase().includes(search.toLowerCase());
      return result;
    });
    setActivities(searchResult);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const activityData = {
      name,
      time,
      details,
    };
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/activities",
      activityData
    );
    console.log(data);
  };

  return (
    <div>
      <Container>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setTime(e.target.value)}
              type="text"
              placeholder="Time"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              placeholder="Details"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Container>
        <Form className="mt-3 mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search classes"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {activities &&
            activities.map((activity) => (
              <tr key={activity._id}>
                <td>{activity.name}</td>
                <td>{activity.time}</td>
                <td>{activity.details}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ActivityList;
