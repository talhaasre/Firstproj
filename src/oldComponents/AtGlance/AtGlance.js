import React from "react";
import { Container } from "react-bootstrap";
import "./AtGlance.css";

const AtGlance = () => {
  return (
    <div class="container-fluid popag">
      <div class="row agr">
        <div class="col-md-4">
          <div class="ag">
            <h1 class="agh">Social Media Audience</h1>
            <p class="agp">246,000+ Monthy Viewers</p>
          </div>
        </div>

        <div class="col-md-8 popc">
          <div class="row">
            <div class="col-md-4 shadow boxd">
              <div class="row">
                <img
                  class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/49/49084.png"
                />
                <div class="headt">
                  <h1 class="heading">15200+</h1>
                  <p class="para">YouTube Subscribers</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 shadow boxd">
            <div class="row">
                <img
                  class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/37/37929.png"
                />
                <div class="headt">
                  <h1 class="heading">1700+</h1>
                  <p class="para">Pinterest Followers</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 shadow boxd">
            <div class="row">
                <img
                  class="icon"
                  src="https://cdn-icons.flaticon.com/png/512/717/premium/717392.png?token=exp=1637246176~hmac=66d33db17d1440b6ab583d3cebc71d08"
                />
                <div class="headt">
                  <h1 class="heading">500+</h1>
                  <p class="para">Instagram Followers</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 shadow boxd">
            <div class="row">
                <img
                  class="icon"
                  src="https://cdn-icons-png.flaticon.com/128/747/747374.png"
                />
                <div class="headt">
                  <h1 class="heading">140+</h1>
                  <p class="para">FB Page Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtGlance;
