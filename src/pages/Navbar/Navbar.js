import React, { Component } from "react";
import "./Navbar.scss";
import { logo192, image1, image2, image3 } from "../../images";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-thm">
        <a /*href="#"*/ className="navbar-brand">
          <img
            src={logo192}
            width="30"
            height="30"
            className="d-inline-block align-top ml-3 mr-3 mt-1"
            alt="Logo"
          />
          <p className="d-inline-block align-top navbr">Talha</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Home</a>
            </li>
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Consulting</a>
            </li>
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Training</a>
            </li>
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Examinations</a>
            </li>
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Knowledge Center</a>
            </li>
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Clients</a>
            </li>
            <li className="nav-item">
              <a /*href="#"*/ className="navbar-link navbr">Company</a>
            </li>
            <li className="nav-item">
              <button className="btnr">Register</button>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-md-block">
              <p>Built in ReactJs components</p>
              <h1>Talha Asre</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-md-block">
              <p>Bootstrap and .Net 4.6</p>
              <h1>Framework</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="carousel-caption d-md-block">
              <p>Basic of C#</p>
              <h1>Backend</h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
