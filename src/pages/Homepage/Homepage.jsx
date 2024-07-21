import React from "react";
import { heroBg, herodevices } from "../../sources";
import styles from "./homepage.module.scss";

const Homepage = () => {
  return (
    <>
      <section className={styles.hero_banner}>
        <img
          src={heroBg}
          alt="laptop typing background"
          className={styles.hero_bg}
        />
        <div className={`my_container ${styles.hero_container}`}>
          <div className={`row ${styles.form_row}`}>
            <div className="col-md-7 p-0"></div>
            <div className={`col-md-5 p-0 ${styles.form_col}`}>
              <div className={styles.form_box}>
                <div className={styles.form_fileds_wrapper}>
                  <h4 className={styles.title}>Get in Touch</h4>
                  <div className="form_field">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      className="form_input"
                      placeholder="Enter your email"
                    />
                  </div>
                  <p className="subtitle">Interest</p>
                  <div className="checkbox_wrapper">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> I have a bike</label>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <label for="vehicle2"> I have a car</label>
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                    <label for="vehicle3"> I have a boat</label>
                  </div>
                  <div className="form_field">
                    <input
                      type="textarea"
                      className="form_input"
                      placeholder="Tell us about what you want"
                    />
                  </div>
                  <button className="common_cta">Get In Touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.home_sec1}>
        <div className="my_container">
          <div className={styles.text_container}>
            <h1 className={styles.heading}>
              Frontend Developer, Consultant & Mentor
            </h1>
            <p className={styles.description}>
              I do deep analyse, make strategy, develop and code pixel perfect
              and highly responsive websites, and I love what I do.
            </p>
          </div>
          <div className={styles.img_wrapper}>
            <img
              src={herodevices}
              alt="hero devices"
              className={styles.hero_img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
