import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SubscribeNews = (props) => {
    return(
        <Container>
            <h1>Subscriber to Our NewsLetter</h1>
      <Row>
        <Col sm>
         <a href="+91 7506377907">+91 7506377907</a>
        </Col>
        <Col sm>
          <input type="text" value="Enter your email!"></input>
          <button value="Submit">Subscribe</button>
        </Col>
        <Col sm>
        <img src="logo192.png" alt="" width="50" height="50"/>
        <img src="logo192.png" alt="" width="50" height="50"/>
        <img src="logo192.png" alt="" width="50" height="50"/>
        <img src="logo192.png" alt="" width="50" height="50"/>
        </Col>
      </Row>
    </Container>
    )
}

export default SubscribeNews;