import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div class="container-fluid" className="popos">
      <div class="row">
        <div class="col-md-3">
          <div class="os">
            <h1 class="osh">Technical Background</h1>
            <button type="button" class="btn btn-light btnr">
              Contact Us
            </button>
          </div>
        </div>
        <div class="col-md-4 twocard">
            <Card />
          </div>
          <div class="col-md-4 twocard">
            <Card2 />
          </div>
          <div class="col-md-1"></div>
        </div>
    </div>
  );
};

export default OurServices;
