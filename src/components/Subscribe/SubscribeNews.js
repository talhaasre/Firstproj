import React from "react";
import { Container } from "react-bootstrap";
import "./Subscribe.css";

const SubscribeNews = () => {
  return (
    <div className="container-fluid Popsb">
      <div className="row pops">
        <div class="col-md-4 col-sm-4 col-lg-4">
          <div className="sb">
            <img
              class="call"
              src="https://cdn-icons-png.flaticon.com/512/455/455604.png"
            />
            <a className="number" href="#">
              +91 7506377907
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <div className="subsh">
            <div>
              <h5>Subscribe to Our Newsletter</h5>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                class="form-control inpt"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
              <button className="button" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <div class="socialt">
            <a class="socialt" href="https://m.facebook.com/people/Talha-Asre/100011268875051/">
              <img
                class="social"
                src="fb.png"
              />
            </a>
            <a class="socialt" href="#">
              <img
                class="social"
                src="twitter.png"
              />
            </a>
            <a class="socialt" href="https://in.linkedin.com/in/talhaasre">
              <img
                class="social"
                src="linkedin.png"
              />
            </a>
            <a class="socialt" href="#">
              <img
                class="social"
                src="mail.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
