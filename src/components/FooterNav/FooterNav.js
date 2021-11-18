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
          <li class="nav-item">
            <a class="navbar-link nvb">Company</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </footer>

    // <Container class="container-fluid" className="popf">
    //   <div class="row">
    //     <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    //       <div className="logof">
    //         <a class="navbar-brand" href="#">
    //           <img class="logoreactf" src="logo192.png"/>
    //           <a className="logotif" href="#">
    //                 Talha
    //               </a>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    //       <nav class="navbar footnav">
    //         <div class="container-fluid">
    //           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //             <div class="navbar-nav">
    //               <a class="nav-link ancf" aria-current="page" href="#">
    //                 Home
    //               </a>
    //               <a class="nav-link ancf" aria-current="page" href="#">
    //                 Consulting
    //               </a>
    //               <a class="nav-link ancf" aria-current="page" href="#">
    //                 Training
    //               </a>
    //               <a class="nav-link ancf" aria-current="page" href="#">
    //                 Examinations
    //               </a>
    //               <a class="nav-link ancf" aria-current="page" href="#">
    //                 Knowledge
    //               </a>
    //               <a class="nav-link ancf" aria-current="page" href="#">
    //                 Clients
    //               </a>
    //               </div>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </Container>
  );
};

export default FooterNav;
