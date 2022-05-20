import React, { useState, useEffect } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import axios from "axios";

let classData = [];

const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");

  const [batchName, setBatchName] = useState("");
  const [time, setTime] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const getClasses = async () => {
      const { data } = await axios.get("http://localhost:8000/api/v1/classes");
      classData = data;
      setClasses(data);
    };
    getClasses();
  }, []);

  useEffect(() => {
    const searchResult = classData.filter((singleClass) => {
      let result =
        singleClass.batchName.toLowerCase().includes(search.toLowerCase()) ||
        singleClass.time.toLowerCase().includes(search.toLowerCase()) ||
        singleClass.room.toLowerCase().includes(search.toLowerCase());
      return result;
    });
    setClasses(searchResult);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const classData = {
      batchName,
      time,
      room,
    };
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/classes",
      classData
    );
    console.log(data);
  };

  return (
    <div>
      <Container>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setBatchName(e.target.value)}
              type="text"
              placeholder="Batch name"
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
              onChange={(e) => setRoom(e.target.value)}
              type="text"
              placeholder="Room"
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
            <th>Batch Name</th>
            <th>Time</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {classes &&
            classes.map((singleClass) => (
              <tr key={singleClass._id}>
                <td>{singleClass.batchName}</td>
                <td>{singleClass.time}</td>
                <td>{singleClass.room}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClassList;
