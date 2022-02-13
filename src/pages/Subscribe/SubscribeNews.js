import React from "react";
import "./Subscribe.scss";
import { fb, twitter, linkedin, mail } from "../../images";

const SubscribeNews = () => {
  return (
    <div className="Popsb">
      <div className="item">
        <div className="sb">
          <img
            className="call"
            src="https://cdn-icons-png.flaticon.com/512/455/455604.png"
            alt="call image"
          />
          <a className="number" /*href="#"*/>+91 7506377907</a>
        </div>
      </div>
      <div className="item">
        <div className="subsh">
          <h5>Subscribe to Our Newsletter</h5>
          <div className="input-group">
            <input
              type="email"
              className="form-control inpt"
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
      <div className="item">
        <div className="socialt">
          <a
            className="socialt"
            href="https://m.facebook.com/people/Talha-Asre/100011268875051/"
          >
            <img className="social" src={fb} alt="fb image" />
          </a>
          <a className="socialt" /*href="#"*/>
            <img className="social" src={twitter} alt="twitter image" />
          </a>
          <a className="socialt" href="https://in.linkedin.com/in/talhaasre">
            <img className="social" src={linkedin} alt="linkedin image" />
          </a>
          <a className="socialt" /*href="#"*/>
            <img className="social" src={mail} alt="mail image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
