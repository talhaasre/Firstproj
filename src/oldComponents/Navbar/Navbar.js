import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-thm">
      <a /*href="#"*/ class="navbar-brand">
      <img src="logo192.png" width="30" height="30" class="d-inline-block align-top" alt="Logo"/><p class="d-inline-block align-top navbr">Talha</p>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Home</a>
          </li>
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Consulting</a>
          </li>
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Training</a>
          </li>
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Examinations</a>
          </li>
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Knowledge Center</a>
          </li>
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Clients</a>
          </li>
          <li class="nav-item">
            <a /*href="#"*/ class="navbar-link navbr">Company</a>
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
      <img class="d-block w-100" src="image1.png" alt="First slide" />
      <div class="carousel-caption d-md-block">
      <p>Built in ReactJs components</p>
      <h1>Talha Asre</h1>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="image2.png" alt="Second slide" />
      <div class="carousel-caption d-md-block">
      <p>Bootstrap and .Net 4.6</p>
      <h1>Framework</h1>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="image3.png" alt="Third slide" />
      <div class="carousel-caption d-md-block">
      <p>Basic of C#</p>
      <h1>Backend</h1>
  </div>
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
