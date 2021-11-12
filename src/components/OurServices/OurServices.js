import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import "./OurServices.css";

const OurServices = () => {
  return (
    <Container className="container-fluid popos">
      <div className="row pops">
        <div className="col-md-3 col-lg-3">
          <div className="os">
          <h1 className="osh">Our Services</h1>
          <button type="button" class="btn btn-light">Register Now</button>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
        <Card />
        </div>
        <div className="col-md-3 col-lg-3">
          <div class="card shadow">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <div class="card-body">
              <h5 class="card-title">Professional Training Services</h5>
              <p class="card-text">
              We provide a professional training that we have developed over 10 years with best practices
              </p>
              <a className="link" href="#">
                View All Services
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-"></div>
      </div>
    </Container>
  );
};

export default OurServices;
