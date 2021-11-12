import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './FooterNav.css';

const FooterNav = () => {
  return (
    <Container class="container-fluid" className="popf">
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="logof">
            <a class="navbar-brand" href="#">
              <img class="logoreactf" src="logo192.png"/>
              <a className="logotif" href="#">
                    Bakkah
                  </a>
            </a>
          </div>
        </div>
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <nav class="navbar navbar-expand-lg footnav">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link ancf" aria-current="page" href="#">
                    Home
                  </a>
                  <a class="nav-link ancf" aria-current="page" href="#">
                    Consulting
                  </a>
                  <a class="nav-link ancf" aria-current="page" href="#">
                    Training
                  </a>
                  <a class="nav-link ancf" aria-current="page" href="#">
                    Examinations
                  </a>
                  <a class="nav-link ancf" aria-current="page" href="#">
                    Knowledge
                  </a>
                  <a class="nav-link ancf" aria-current="page" href="#">
                    Clients
                  </a>
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default FooterNav;
