import React from "react";
import { Container } from "react-bootstrap";
import "./Popular.css";

const PopularCourses = () => {
  return (
    <div className="container-fluid Pop">
      <div className="row popr">
        <div class="col-md-3">
          <div className="pc">
            <h1 className="pch">Social Media Highlights</h1>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row rowd">
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div className="card shadow">
                <iframe
                  class="card-img-top"
                  src="https://www.youtube.com/embed/e5g2SLU3MJo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">Rahat Indori Top 10 Shayari <br /> <b class="alert-success">1.2M+</b> views</h5>
                  <a className="link" href="https://www.youtube.com/c/immensescars">
                    Visit YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div class="card shadow">
                <iframe
                  class="card-img-top"
                  src="https://www.youtube.com/embed/peA3woMX0I8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">A Tribute to Dilip Kumar<br /> <b class="alert-danger">652+</b> views</h5>
                  <a className="link" href="https://www.youtube.com/c/immensescars">
                    Visit YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div class="card shadow">
                <iframe
                  class="card-img-top"
                  src="https://www.youtube.com/embed/_xdXE0ftxGY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">Hot Water Spring Miracle<br /> <b class="alert-info">3800+</b> views</h5>
                  <a className="link" href="https://www.youtube.com/c/immensescars">
                    Visit YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
