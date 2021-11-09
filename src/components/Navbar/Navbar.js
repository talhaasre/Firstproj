import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <Container>
  <Row>
    <Col sm={4}>
    <img src="logo192.png" alt="" width="75" height="75"/>
    </Col>
    <Col sm={8}>
    <ul>
            <a>Home</a>
            <a>Consulting</a>
            <a>Training</a>
            <a>Examinations</a>
            <a>Cleints</a>
            <a>Company</a>
            <button>Register</button>
          </ul>
    </Col>
  </Row>

      { <nav className="NavbarItems">
        <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <Button>Register</Button>
      </nav> }
      </Container>
    );
  }
}

export default Navbar;