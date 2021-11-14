import React from "react";
import { Container } from "react-bootstrap";
import "./Popular.css";

const PopularCourses = () => {
  return (
    <Container className="container-fluid Pop">
      <div className="row popr">
        <div class="col-md-3">
          <div className="pc">
            <h1 className="pch">Popular Videos</h1>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row rowd">
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div className="card shadow">
                <iframe
                  class="card-img-top"
                  src="https://www.youtube.com/embed/x9C_f1fcKVs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">Learn Business</h5>
                  <a className="link" href="#">
                    Start Course
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div class="card shadow">
                <iframe
                  class="card-img-top"
                  src="https://www.youtube.com/embed/f4CF-qBDu5o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">Team Management</h5>
                  <a className="link" href="#">
                    Start Course
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div class="card shadow">
                <iframe
                  class="card-img-top"
                  src="https://www.youtube.com/embed/bixR-KIJKYM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">Digital Marketing</h5>
                  <a className="link" href="#">
                    Start Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularCourses;
