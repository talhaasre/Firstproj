import React from "react";
import { Container } from "react-bootstrap";
import "./Subscribe.css";

const SubscribeNews = () => {
  return (
    <div class="Popsb">
      <div class="item">
      <div className="sb">
            <img
              class="call"
              src="https://cdn-icons-png.flaticon.com/512/455/455604.png"
            />
            <a class="number" href="#">
              +91 7506377907
            </a>
          </div>
        </div>
        <div class="item">
        <div class="subsh">
            <h5>Subscribe to Our Newsletter</h5>
            <input
                type="email"
                class="form-control inpt"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"/>
              <button class="button" type="button">
                Subscribe
              </button>
            </div>
        </div>
        <div class="item">
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
  );
};

export default SubscribeNews;
