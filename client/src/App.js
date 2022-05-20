import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import ClassList from "./components/ClassList";
import ActivityList from "./components/ActivityList";
import LeftSidebar from "./components/LeftSidebar";
import Profile from "./components/Profile";
function App() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Profile />
          <LeftSidebar />
        </Col>
        <Col>
          <Routes>
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/classes" element={<ClassList />} />
            <Route path="/activities" element={<ActivityList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
