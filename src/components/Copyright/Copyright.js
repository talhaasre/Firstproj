import React from "react";
import { Container } from "react-bootstrap";
import "./Copyright.css";

const Copyright = () => {
  return (
    <Container className="container-fluid Popl">
      <div className="row popl">
        <div class="col-md-4 col-sm-4 col-lg-4">
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <div>
            <div>
              <p className="subc">User Interface Created by Talha Asre</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <div class="socialtc">
            <a class="socialct" href="#" >
              <img
                class="socialc"
                src="payment.png"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Copyright;
