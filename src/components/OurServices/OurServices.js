import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const OurServices = () => {
  return (
    <Container>
      <Row>
        <Col sm><h1><strong>Our Services</strong></h1></Col>
        <Col sm>
            <img src="logo192.png" alt=""/>
            <h3>Managements Consulting Services</h3>
            <p></p>
            <p>Our Consultation serives are a World of experience to help you achieve all your business goals.</p>
            <a href="">View All Services</a>
        </Col>
        <Col sm>
        <img src="logo192.png" alt=""/>
            <h3>Professional Training Services</h3>
            <p></p>
            <p>We provide accredited, and up to date training across a wide range of specialist.</p>
            <a href="">View All Services</a>
        </Col>
      </Row>
    </Container>
  );
};

export default OurServices;
