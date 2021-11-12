import React from "react";
import { Container } from "react-bootstrap";
import "./AtGlance.css";

const AtGlance = () => {
  return (
    <Container className="container-fluid popag">
      <div class="row agr">
        <div class="col-md-4">
          <div className="ag">
            <h1 className="agh">Bakkah at a Glance</h1>
          </div>
        </div>

        <div class="col-md-8 popc">
          <div class="row">
            <div class="col-md-4 shadow boxd">
              <div class="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/188/188379.png"
                />
                <div>
                  <h1 className="heading">17500+</h1>
                  <p className="para">Capabilities built</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 shadow boxd">
            <div class="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/3068/3068380.png"
                />
                <div>
                  <h1 className="heading">800+</h1>
                  <p className="para">Learning Sessions</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 shadow boxd">
            <div class="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/1786/1786971.png"
                />
                <div>
                  <h1 className="heading">450+</h1>
                  <p className="para">Client Engagements</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 shadow boxd">
            <div class="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/3094/3094843.png"
                />
                <div>
                  <h1 className="heading">200+</h1>
                  <p className="para">Partners of Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row">
        <div class="col-md-4"></div>

        <div class="col-md-8">
          <div class="row popc">
            <div class="col-md-4 shadow boxd">
              <div class="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/188/188379.png"
                />
                <div>
                  <h1 className="heading">17500+</h1>
                  <p className="para">Capabilities built</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 shadow boxd">
              <div class="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/188/188379.png"
                />
                <div>
                  <h1 className="heading">17500+</h1>
                  <p className="para">Capabilities built</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default AtGlance;
