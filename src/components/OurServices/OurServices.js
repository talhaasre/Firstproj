import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import "./OurServices.css";

const OurServices = () => {
  return (
    <Container class="container-fluid" className="popos">
      <div class="row">
        <div class="col-md-3">
          <div class="os">
            <h1 class="osh">Our Services</h1>
            <button type="button" class="btn btn-light">
              Register Now
            </button>
          </div>
        </div>
        <div class="col-md-4 twocard">
            <Card />
          </div>
          <div class="col-md-4 twocard">
            <div class="card shadow">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <div class="card-body">
                <h5 class="card-title">Professional Training Services</h5>
                <p class="card-text">
                  We provide a professional training that we have developed over
                  10 years with best practices
                </p>
                <a class="link" href="#">
                  View All Services
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
    </Container>
  );
};

export default OurServices;
