import React, { useState, useEffect } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import axios from "axios";

let employeeData = [];

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [offday, setOffday] = useState("");
  const [officeTime, setOfficeTime] = useState("");

  useEffect(() => {
    const getEmployees = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/employees"
      );
      employeeData = data;
      setEmployees(data);
    };
    getEmployees();
  }, []);

  useEffect(() => {
    const searchResult = employeeData.filter((employee) => {
      let result =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.designation.toLowerCase().includes(search.toLowerCase()) ||
        employee.phone.toLowerCase().includes(search.toLowerCase()) ||
        employee.offday.toLowerCase().includes(search.toLowerCase()) ||
        employee.officeTime.toLowerCase().includes(search.toLowerCase());
      return result;
    });
    setEmployees(searchResult);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      name,
      offday,
      officeTime,
      phone,
      designation,
    };
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/employees",
      employeeData
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
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setDesignation(e.target.value)}
              type="text"
              placeholder="Designation"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setOffday(e.target.value)}
              type="text"
              placeholder="Off Day"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setOfficeTime(e.target.value)}
              type="text"
              placeholder="Office Time"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone Number"
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
              placeholder="Search Employees"
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
            <th>Designation</th>
            <th>Office Time</th>
            <th>Off Day</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.officeTime}</td>
                <td>{employee.offday}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
