import React from "react";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import "./OurServices.scss";

const OurServices = () => {
  return (
    <div className="container-fluid popos">
      <div className="row">
        <div className="col-md-3">
          <div className="os">
            <h1 className="osh">Technical Background</h1>
            <button type="button" className="btn btn-light btnr">
              Contact Us
            </button>
          </div>
        </div>
        <div className="col-md-4 twocard">
          <Card />
        </div>
        <div className="col-md-4 twocard">
          <Card2 />
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default OurServices;
