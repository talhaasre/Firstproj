import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const AtGlance = () => {
  return (
    <Container>
      <Row>
        <Col sm>
          <h1>
            <strong>Bakkah At Glance</strong>
          </h1>
        </Col>
        <Col sm>
          <Row>
            <h3>17500+</h3>
            <p></p>
            <p>Capabilities Built</p>
          </Row>
          <Row>
            <h3>450+</h3>
            <p></p>
            <p>Client Engagements</p>
          </Row>
        </Col>
        <Col sm>
          <Row>
            <h3>800+</h3>
            <p></p>
            <p>Learning Seasions</p>
          </Row>
          <Row>
            <h3>200+</h3>
            <p></p>
            <p>partners of success</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AtGlance;
