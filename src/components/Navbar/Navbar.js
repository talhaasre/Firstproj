import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Container class="container-fluid">
      <div class="row popn">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel">
          <div class="carousel-inner cin">
            <div class="carousel-item active">
              <img class="w-100" src="cam2.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="w-100" src="cam1.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="w-100" src="cam3.jpg" alt="Third slide" />
            </div>

            <div class="row">
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="logotext">
                  <a class="navbar-brand" href="#">
                    <img class="logoreact" src="logo192.png" />
                    <a className="logoti" href="#">
                      Bakkah
                    </a>
                  </a>
                </div>
              </div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <nav class="navbar navbar-expand-lg topnav">
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
                    <div
                      class="collapse navbar-collapse"
                      id="navbarNavAltMarkup"
                    >
                      <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="#">
                          Home
                        </a>
                        <a class="nav-link" aria-current="page" href="#">
                          Consulting
                        </a>
                        <a class="nav-link" aria-current="page" href="#">
                          Training
                        </a>
                        <a class="nav-link" aria-current="page" href="#">
                          Examinations
                        </a>
                        <a class="nav-link" aria-current="page" href="#">
                          Knowledge
                        </a>
                        <a class="nav-link" aria-current="page" href="#">
                          Clients
                        </a>
                        <a class="nav-link" aria-current="page" href="#">
                          Company
                        </a>
                      </div>
                      <div>
                        <button type="button" class="button1">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
                <div class="row headingban">
                  <div class="col-md">
                  <h5>NEXT COURSE STARTS FROM 1 DEC 2021</h5>
                  <h1>Professional Scrum Developer</h1>
                </div>
                </div>
                <div class="row headingmob">
                  <div class="col-md" className="textover"> 
                  <h6>Next Course Starts from 21st Dec</h6>
                  <h6>PROFESSIONAL SCRUM DEVELOPER</h6>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev cin"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next cin"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </Container>
  );
};

export default Navbar;
