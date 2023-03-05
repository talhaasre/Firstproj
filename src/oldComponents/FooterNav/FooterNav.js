import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './FooterNav.css';

const FooterNav = () => {
  return (
    <footer class="page-footer font-small blue pt-4 popf">

  <div class="container-fluid text-center text-md-left">

    <div class="row navbar1">

      <div class="col-md-4 columnmd4">

        <img src="favicon.ico" />
        <a class="nvb"><h5 class="d-inline-block align-center">Talha</h5></a>
      </div>
      
      <hr class=" w-100 d-none" />

      <div class="col-md-8 mb-md-0 mb-3">
        <ul class="list-unstyled">
        <li class="nav-item">
            <a class="navbar-link nvb ">Home</a>
          </li>
          <li class="nav-item">
            <a class="navbar-link nvb">Consulting</a>
          </li>
          <li class="nav-item">
            <a class="navbar-link nvb">Training</a>
          </li>
          <li class="nav-item">
            <a class="navbar-link nvb">Examinations</a>
          </li>
          <li class="nav-item">
            <a class="navbar-link nvb">Clients</a>
          </li>
          <li href="#" class="nav-item arrow">
            <a class="navbar-link nvb">Company</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  );
};

export default FooterNav;
