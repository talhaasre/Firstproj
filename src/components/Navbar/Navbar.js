import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-thm">
      <a href="#" class="navbar-brand">
      <img src="logo192.png" width="30" height="30" class="d-inline-block align-top" alt=""/> Talha
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Consulting</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Training</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Examinations</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Knowledge Center</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Clients</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbar-link navbr">Company</a>
          </li>
          <li class="nav-item">
            <button class="btnr">Register</button>
          </li>
        </ul>
      </div>
    </nav>

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  </div>
  );
};

export default Navbar;
