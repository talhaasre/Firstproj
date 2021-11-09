import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const FooterNav = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <img src="logo192.png" alt="" width="100" height="100" />
        </Col>
        <Col sm={8}>
          <ul>
            <a>Home</a>
            <a>About Us</a>
            <a>News</a>
            <a>Career</a>
            <a>Contact Us</a>
            <a>Privacy Policy</a>
          </ul>
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
    </Container>
    
  );
};

export default FooterNav;
