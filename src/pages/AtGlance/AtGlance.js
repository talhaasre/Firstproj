import React from "react";
import "./AtGlance.scss";

const AtGlance = () => {
  return (
    <div className="container-fluid popag">
      <div className="row agr">
        <div className="col-md-4">
          <div className="ag">
            <h1 className="agh">Social Media Audience</h1>
            <p className="agp">246,000+ Monthy Viewers</p>
          </div>
        </div>

        <div className="col-md-8 popc">
          <div className="row">
            <div className="col-md-4 shadow boxd">
              <div className="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/49/49084.png"
                  alt="youtube image"
                />
                <div className="headt">
                  <h1 className="heading">15200+</h1>
                  <p className="para">YouTube Subscribers</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 shadow boxd">
            <div className="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/37/37929.png"
                  alt="pinterest image"
                />
                <div className="headt">
                  <h1 className="heading">1700+</h1>
                  <p className="para">Pinterest Followers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 shadow boxd">
            <div className="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
                  alt="instagram image"
                />
                <div className="headt">
                  <h1 className="heading">500+</h1>
                  <p className="para">Instagram Followers</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 shadow boxd">
            <div className="row">
                <img
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/128/747/747374.png"
                  alt="facebook image"
                />
                <div className="headt">
                  <h1 className="heading">140+</h1>
                  <p className="para">FB Page Followers</p>
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
