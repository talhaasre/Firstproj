import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const PopularCourses = () => {
  return (
    <Container>
      <Row>
        <Col sm>
          <h1>
            <strong>Popular Courses</strong>
          </h1>
        </Col>
        <Col sm>
          <img src="logo192.png" alt="" />
          <h3>Business Development</h3>
          <p></p>
          <a href="">Start Course</a>
        </Col>
        <Col sm>
          <img src="logo192.png" alt="" />
          <h3>Team Management</h3>
          <p></p>
          <a href="">Start Course</a>
        </Col>
        <Col sm>
        <img src="logo192.png" alt="" />
          <h3>Digital Marketing</h3>
          <p></p>
          <a href="#">Start Course</a>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularCourses;
