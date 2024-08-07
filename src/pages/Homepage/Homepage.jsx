import React from "react";
import {
  heroBg,
  herodevices,
  microsoftword,
  adobephotoshop,
  applepages,
  microsoftpowerpoint,
  microsoftexcel,
  Vector1,
  Vector,
  TickIcon,
  Avatar,
  ZeroErroricon,
  CorrectFormaticon,
  CorrectMarginLineSpaceicon,
  EasyToEditOutputFileicon,
  GoodForPrintingicon,
  PickYourFormatOfChoiceicon,
  FooterWave,
  logocolor,
  amex,
  mastercard,
  paypal,
  visa,
  google,
  twitter,
  instagram,
  linkedin,
  hover,
  GuaranteeIcon,
  GuaranteeIconInside,
  buttonicon,
} from "../../sources";
import styles from "./homepage.module.scss";
// import { CustomAccordion } from "./Accordion/Accordion/CustomAccordion";

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
            <div className={`col-md-7 p-0 ${styles.form_col}`}>
              <div className={styles.form_fileds_wrapper}>
                <h2 className={styles.title_hs}>PDF Conversion Services</h2>
                <br />
                <h5 className={styles.title_hs_1}>
                  Looking to publish your Ebook? Our team of expert formatters
                  will make your ebook shine. Get in touch now!
                </h5>
                <br />
                <h3 className={styles.title_hs_2}>Starting at $49.00</h3>
                {/* <br /> */}
                <h4>
                  <span className={styles.title_span}>____</span>
                </h4>
                <br />

                <div className={`my_container ${styles.display}`}>
                  <div className={`${styles.flex} ${styles.displayCol}`}>
                    <img
                      src={TickIcon}
                      alt="Radio Button"
                      className={styles.tickicon}
                    />

                    <h5 className={styles.title_hs_1}>48 Hour Delivery</h5>
                  </div>
                  <div className={`${styles.flex} ${styles.displayCol}`}>
                    <img
                      src={TickIcon}
                      alt="Radio Button"
                      className={styles.tickicon}
                    />

                    <h5 className={styles.title_hs_1}>Unlimited Revisions</h5>
                  </div>
                  <div className={`${styles.flex} ${styles.displayCol}`}>
                    <img
                      src={TickIcon}
                      alt="Radio Button"
                      className={styles.tickicon}
                    />

                    <h5 className={styles.title_hs_1}>
                      Get Accepted To Amazon. Fast.
                    </h5>
                  </div>
                </div>
                <article className={styles.HeroTestimonial}>
                  <p className={styles.p}>
                    Thanks so much. What a great job you did! I will recommend
                    you to my friends
                  </p>
                  <div className={styles.flex}>
                    <img
                      src={Avatar}
                      alt="Radio Button"
                      className={styles.avatarimg}
                    />
                    <div>
                      <h6>Bryan Arnoldy</h6>
                      <div className={styles.flex}>
                        <img
                          src={TickIcon}
                          alt="Radio Button"
                          className={styles.tickicon}
                        />
                        <p>Verified customer</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
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

      <hr />
      <section className={styles.ss}>
        <div className="my_container">
          <div className={styles.ssimg}>
            <img src={Vector} alt="hero devices" className={styles.sizeimg} />
            <img src={Vector1} alt="hero devices" className={styles.sizeimg} />
            <img
              src={microsoftexcel}
              alt="hero devices"
              className={styles.sizeimg}
            />
            <img
              src={microsoftword}
              alt="hero devices"
              className={styles.sizeimg}
            />
            <img
              src={microsoftpowerpoint}
              alt="hero devices"
              className={styles.sizeimg}
            />
            <img
              src={applepages}
              alt="hero devices"
              className={styles.sizeimg}
            />
            <img
              src={adobephotoshop}
              alt="hero devices"
              className={styles.sizeimg}
            />
          </div>
        </div>
      </section>

      <section className={styles.pros_sec}>
        <h2 className={styles.pros_h}>
          We have converted 1000s of PDFs since 2013
        </h2>
        <div className={styles.pros_items}>
          <div className={styles.pros_items_row1}>
            <div className={styles.pros_items_row1_div}>
              <img
                src={ZeroErroricon}
                alt="Radio Button"
                className={styles.avatarimg1}
              />
              <div>
                <h6 className={styles.pros_h6}>Zero Error</h6>
                <p className={styles.pros_items_row1_p}>
                  Professional PDF formatting service, you are not only paying
                  for the technical expertise and skill
                </p>
              </div>
            </div>
            <div className={styles.pros_items_row1_div}>
              <img
                src={CorrectFormaticon}
                alt="Radio Button"
                className={styles.avatarimg1}
              />
              <div>
                <h6 className={styles.pros_h6}>Correct Format</h6>
                <p className={styles.pros_items_row1_p}>
                  Professional PDF formatting service, you are not only paying
                  for the technical expertise and skill
                </p>
              </div>
            </div>
            <div className={styles.pros_items_row1_div}>
              <img
                src={CorrectMarginLineSpaceicon}
                alt="Radio Button"
                className={styles.avatarimg1}
              />
              <div>
                <h6 className={styles.pros_h6}>Correct Margin & Line Space</h6>
                <p className={styles.pros_items_row1_p}>
                  Professional PDF formatting service, you are not only paying
                  for the technical expertise and skill
                </p>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className={styles.pros_items_row2}>
            <div className={styles.pros_items_row1_div}>
              <img
                src={EasyToEditOutputFileicon}
                alt="Radio Button"
                className={styles.avatarimg1}
              />
              <div>
                <h6 className={styles.pros_h6}>Easy To Edit Output File</h6>
                <p className={styles.pros_items_row1_p}>
                  Professional PDF formatting service, you are not only paying
                  for the technical expertise and skill
                </p>
              </div>
            </div>
            <div className={styles.pros_items_row1_div}>
              <img
                src={GoodForPrintingicon}
                alt="Radio Button"
                className={styles.avatarimg1}
              />
              <div>
                <h6 className={styles.pros_h6}>Good For Printing</h6>
                <p className={styles.pros_items_row1_p}>
                  Professional PDF formatting service, you are not only paying
                  for the technical expertise and skill
                </p>
              </div>
            </div>
            <div className={styles.pros_items_row1_div}>
              <img
                src={PickYourFormatOfChoiceicon}
                alt="Radio Button"
                className={styles.avatarimg1}
              />
              <div>
                <h6 className={styles.pros_h6}>Pick Your Format Of Choice</h6>
                <p className={styles.pros_items_row1_p}>
                  Professional PDF formatting service, you are not only paying
                  for the technical expertise and skill
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pros_p}>
          <p>
            When you hire a professional ebook formatting service, you are not
            only paying for the technical expertise and skill to format your
            book correctly; you are also paying for the assurance that your book
            will look great no matter what device it is being viewed on. You
            want to make sure that someone takes the time to pay attention to
            even the smallest details in order to make sure that your book looks
            perfect on all devices..
          </p>
          <br />
          <p>
            Professional eBook formatting services are an invaluable tool when
            it comes to getting your book ready for publication. Whether you
            have written a novel, an academic paper, or an eBook, there are
            different types of formats available depending on the type of
            project you are working on.
          </p>
        </div>
      </section>
      

      <section className={styles.sps}>
        <h1 className={styles.sps_h1}>Services & Pricing</h1>

        <div className={styles.sps_scr}>
          <div className={styles.sps_scr_top_boxes}>
            <div className={styles.sps_scr_boxes}>
              <div className={styles.sps_scr_box}>
                <h3 className={styles.sps_scr_box_h3}>Standard Novel</h3>
                <h3 className={styles.sps_scr_box_h3_1}>
                  $49.<sup>00</sup>
                </h3>

                <div className={styles.sps_scr_box_div}>
                  <ul className={styles.sps_scr_box_div_ul}>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      under 400 pages
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      5 images max
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      no complex formatting
                    </li>
                  </ul>
                </div>

                <div className={styles.sps_scr_box_div_1}>
                  <button className={styles.sps_scr_box_div_1_button}>
                    Get In Touch
                  </button>
                  <img
                    src={buttonicon}
                    alt="Radio Button"
                    className={styles.buttonicon}
                  />
                </div>
              </div>

              <div className={styles.sps_scr_box}>
                <h3 className={styles.sps_scr_box_h3}>Standard Novel</h3>
                <h3 className={styles.sps_scr_box_h3_1}>
                  $49.<sup>00</sup>
                </h3>

                <div className={styles.sps_scr_box_div}>
                  <ul className={styles.sps_scr_box_div_ul}>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      under 400 pages
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      5 images max
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      no complex formatting
                    </li>
                  </ul>
                </div>

                <div className={styles.sps_scr_box_div_1}>
                  <button className={styles.sps_scr_box_div_1_button}>
                    Get In Touch
                  </button>
                  <img
                    src={buttonicon}
                    alt="Radio Button"
                    className={styles.buttonicon}
                  />
                </div>
              </div>

              <div className={styles.sps_scr_box}>
                <h3 className={styles.sps_scr_box_h3}>Standard Novel</h3>
                <h3 className={styles.sps_scr_box_h3_1}>
                  $49.<sup>00</sup>
                </h3>

                <div className={styles.sps_scr_box_div}>
                  <ul className={styles.sps_scr_box_div_ul}>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      under 400 pages
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      5 images max
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      no complex formatting
                    </li>
                  </ul>
                </div>

                <div className={styles.sps_scr_box_div_1}>
                  <button className={styles.sps_scr_box_div_1_button}>
                    Get In Touch
                  </button>
                  <img
                    src={buttonicon}
                    alt="Radio Button"
                    className={styles.buttonicon}
                  />
                </div>
              </div>
            </div>

            <div className={styles.sps_scr_boxes}>
              <div className={styles.sps_scr_box}>
                <h3 className={styles.sps_scr_box_h3}>Standard Novel</h3>
                <h3 className={styles.sps_scr_box_h3_1}>
                  $49.<sup>00</sup>
                </h3>

                <div className={styles.sps_scr_box_div}>
                  <ul className={styles.sps_scr_box_div_ul}>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      under 400 pages
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      5 images max
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      no complex formatting
                    </li>
                  </ul>
                </div>

                <div className={styles.sps_scr_box_div_1}>
                  <button className={styles.sps_scr_box_div_1_button}>
                    Get In Touch
                  </button>
                  <img
                    src={buttonicon}
                    alt="Radio Button"
                    className={styles.buttonicon}
                  />
                </div>
              </div>

              <div className={styles.sps_scr_box}>
                <h3 className={styles.sps_scr_box_h3}>Standard Novel</h3>
                <h3 className={styles.sps_scr_box_h3_1}>
                  $49.<sup>00</sup>
                </h3>

                <div className={styles.sps_scr_box_div}>
                  <ul className={styles.sps_scr_box_div_ul}>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      under 400 pages
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      5 images max
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      no complex formatting
                    </li>
                  </ul>
                </div>

                <div className={styles.sps_scr_box_div_1}>
                  <button className={styles.sps_scr_box_div_1_button}>
                    Get In Touch
                  </button>
                  <img
                    src={buttonicon}
                    alt="Radio Button"
                    className={styles.buttonicon}
                  />
                </div>
              </div>

              <div className={styles.sps_scr_box}>
                <h3 className={styles.sps_scr_box_h3}>Standard Novel</h3>
                <h3 className={styles.sps_scr_box_h3_1}>
                  $49.<sup>00</sup>
                </h3>

                <div className={styles.sps_scr_box_div}>
                  <ul className={styles.sps_scr_box_div_ul}>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      under 400 pages
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      5 images max
                    </li>
                    <li className={styles.sps_scr_box_div_ul_li}>
                      no complex formatting
                    </li>
                  </ul>
                </div>

                <div className={styles.sps_scr_box_div_1}>
                  <button className={styles.sps_scr_box_div_1_button}>
                    Get In Touch
                  </button>
                  <img
                    src={buttonicon}
                    alt="Radio Button"
                    className={styles.buttonicon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sps_group}>
          <div className={styles.sps_group_box}>
            <h4 className={styles.sps_group_box_h4}>Revisions</h4>
            <p className={styles.sps_group_box_p}>
              Unlimited free revisions for two weeks after delivery. After this
              date additional revisions request costa flat $19 for any
              reasonable amount of revisions.
            </p>
          </div>

          <div className={styles.sps_group_box}>
            <h4 className={styles.sps_group_box_h4}>Output Formats</h4>
            <p className={styles.sps_group_box_p}>
              We provide both Mobi and Epub versions ready forpublishing at
              Amazon, Nook, Smashword, Apple, etc.
            </p>
          </div>

          <div className={styles.sps_group_box}>
            <h4 className={styles.sps_group_box_h4}>
              We can also try using other formats
            </h4>
            <div className={styles.sps_group_box_div}>
              <div className={styles.sps_group_box_div_div}>
                <img
                  src={TickIcon}
                  alt="Radio Button"
                  className={styles.tickicon}
                />
                <p className={styles.sps_group_box_div_div_p}>
                  48 Hour Delivery
                </p>
              </div>

              <div className={styles.sps_group_box_div_div}>
                <img
                  src={TickIcon}
                  alt="Radio Button"
                  className={styles.tickicon}
                />
                <p className={styles.sps_group_box_div_div_p}>
                  Unlimited Revisions
                </p>
              </div>

              <div className={styles.sps_group_box_div_div}>
                <img
                  src={TickIcon}
                  alt="Radio Button"
                  className={styles.tickicon}
                />
                <p className={styles.sps_group_box_div_div_p}>
                  Get Accepted To Amazon. Fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.faq}>
        <h1 className={styles.faq_h1}>Frequently Asked Questions</h1>

        <div className={styles.faq_div}>
          <div className={styles.faq_div_1}>
            <h2 className={styles.faq_div_1_h2}>Still Have Some Questions?</h2>
            <p className={styles.faq_div_1_p}>
              Email us! You will be pleasantly surprised by how fast we reply
              and how easy it is for you to self-published on all platforms. You
              can also use the blue box on the bottom right of your screen to
              reach us.
            </p>
            {/* <div className={styles.faq_div_1_div}> */}
            <button className={styles.faq_div_1_div_button}>
              Customer Support
            </button>
            {/* </div> */}
          </div>

          <div className={styles.faq_div_2}>{/* <CustomAccordion /> */}</div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.testimonials_h}>1000s Of Happy Customers</h2>
        <div className={styles.testimonials_div}>
          <div className={styles.testimonials_div_boxes}>
            <div className={styles.testimonials_div_box}>
              <p className={styles.testimonials_div_box_h}>
                Modern look & trending design
              </p>
              <p className={styles.testimonials_div_box_p}>
                Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.
              </p>

              <div className={styles.flex}>
                <img
                  src={Avatar}
                  alt="Radio Button"
                  className={styles.avatarimg}
                />
                <div>
                  <h6>Bryan Arnoldy</h6>
                  <div className={styles.flex}>
                    <img
                      src={TickIcon}
                      alt="Radio Button"
                      className={styles.tickicon}
                    />
                    <p>Verified customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonials_div_box}>
              <h5 className={styles.testimonials_div_box_h}>
                Modern look & trending design
              </h5>
              <p className={styles.testimonials_div_box_p}>
                Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.
              </p>

              <div className={styles.flex}>
                <img
                  src={Avatar}
                  alt="Radio Button"
                  className={styles.avatarimg}
                />
                <div>
                  <h6>Bryan Arnoldy</h6>
                  <div className={styles.flex}>
                    <img
                      src={TickIcon}
                      alt="Radio Button"
                      className={styles.tickicon}
                    />
                    <p>Verified customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonials_div_box}>
              <p className={styles.testimonials_div_box_star}>*****</p>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.AingTkaDHDydZb2QwZVeLAHaBu&pid=Api&P=0&h=220"
                alt=""
                width="92px"
                height="9px"
              />
              <h5 className={styles.testimonials_div_box_h}>
                Modern look & trending design
              </h5>
              <p className={styles.testimonials_div_box_p}>
                Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.
              </p>

              <div className={styles.flex}>
                <img
                  src={Avatar}
                  alt="Radio Button"
                  className={styles.avatarimg}
                />
                <div>
                  <h6>Bryan Arnoldy</h6>
                  <div className={styles.flex}>
                    <img
                      src={TickIcon}
                      alt="Radio Button"
                      className={styles.tickicon}
                    />
                    <p>Verified customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className={styles.guarantee}>
        <div className={styles.guarantee_div}>
          <div className={styles.guarantee_div_col}>
            <h1 className={styles.guarantee_div_col_h1}>Help Team Guarantee</h1>
            <p className={styles.guarantee_div_col_p}>
              We stand behind our services with our 100% Satisfaction Guarantee.
              We genuinely want you to be happy with our work. If for any reason
              you don’t like something, we’ll work with you to make it right or
              we will refund your money. It’s that simple.
            </p>
            <div className={styles.guarantee_div_col_div}>
              <div className={styles.guarantee_div_col_div_1}>
                <img
                  src={TickIcon}
                  alt="Radio Button"
                  className={styles.tickicon}
                />

                <p className={styles.guarantee_div_col_div_1_p}>
                  48 Hour Delivery
                </p>
              </div>

              <div className={styles.guarantee_div_col_div_1}>
                <img
                  src={TickIcon}
                  alt="Radio Button"
                  className={styles.tickicon}
                />

                <p className={styles.guarantee_div_col_div_1_p}>
                  Unlimited Revisions
                </p>
              </div>

              <div className={styles.guarantee_div_col_div_1}>
                <img
                  src={TickIcon}
                  alt="Radio Button"
                  className={styles.tickicon}
                />

                <p className={styles.guarantee_div_col_div_1_p}>
                  Get Accepted To Amazon. Fast.
                </p>
              </div>
            </div>

            <div className={styles.guarantee_div_col_div}>
              <h2 className={styles.guarantee_div_col_div_h2}>
                Starting at $49.<sup>00</sup>
              </h2>

              <div className={styles.guarantee_div_col_div_div}>
                <button className={styles.guarantee_div_col_div_div_button}>
                  Get In Touch
                </button>
                <img
                  src={buttonicon}
                  alt="Radio Button"
                  className={styles.buttonicon}
                />
              </div>
            </div>
          </div>

          <div className={styles.guarantee_div_images}>
            <img
              src={GuaranteeIcon}
              alt="Radio Button"
              className={styles.guarantee_div_img}
            />

            <img
              src={GuaranteeIconInside}
              alt="Radio Button"
              className={styles.guarantee_div_img_inside}
            />
          </div>
        </div>
      </section>


      <section className={styles.footer}>
        <div className={styles.FooterWave_div}>
          <img
            src={FooterWave}
            alt="hero devices"
            className={styles.FooterWave_img}
          />
        </div>
        <div className={styles.footerdiv_top}>
          <div className={styles.footerdiv}>
            <div className={styles.footerdiv1}>
              <img
                src={logocolor}
                alt="laptop typing background"
                className={styles.logo}
              />

              <div className={styles.footerdiv1_1}>
                <img
                  src={amex}
                  alt="Radio Button"
                  className={styles.footerdiv1_1_img}
                />

                <img
                  src={mastercard}
                  alt="Radio Button"
                  className={styles.footerdiv1_1_img}
                />

                <img
                  src={paypal}
                  alt="Radio Button"
                  className={styles.footerdiv1_1_img}
                />

                <img
                  src={visa}
                  alt="Radio Button"
                  // className={styles.avatarimg}
                />
              </div>
            </div>

            <div className={styles.footerdiv2}>
              <h6 className={styles.footerdiv2_h6}>Menu</h6>

              <div className={styles.footerdiv2_2}>
                <p className={styles.footerdiv2_2_p}>Home</p>
                <p className={styles.footerdiv2_2_p}>Services & Price</p>
                <p className={styles.footerdiv2_2_p}>Process</p>
                <p className={styles.footerdiv2_2_p}>Testimonial</p>
                <p className={styles.footerdiv2_2_p}>Blog</p>
                <p className={styles.footerdiv2_2_p}>Contact</p>
              </div>
            </div>

            <div className={styles.footerdiv3}>
              <h6 className={styles.footerdiv3_h6}>Let's Keep In Touch</h6>

              <p className={styles.footerdiv3_p}>
                3419 Virginia Beach Blvd, #301 Virginia Beach, VA 23452
              </p>

              <div className={styles.footerdiv3_div}>
                <img
                  src={google}
                  alt="Radio Button"
                  className={styles.footerdiv3_div_img}
                />

                <img
                  src={twitter}
                  alt="Radio Button"
                  className={styles.footerdiv3_div_img}
                />

                <img
                  src={instagram}
                  alt="Radio Button"
                  className={styles.footerdiv3_div_img}
                />

                <img
                  src={linkedin}
                  alt="Radio Button"
                  className={styles.footerdiv3_div_img}
                />

                <img
                  src={hover}
                  alt="Radio Button"
                  // className={styles.avatarimg}
                />
              </div>
            </div>

            <div className={styles.footerdiv4}>
              <h6 className={styles.footerdiv4_h6}>Services</h6>

              <div className={styles.footerdiv4_1}>
                <p className={styles.footerdiv4_1_p}>PDF Formatting Services</p>
                <p className={styles.footerdiv4_1_p}>Book Formatting </p>
                <p className={styles.footerdiv4_1_p}>KDP Services</p>
              </div>
            </div>
          </div>

          <p className={styles.footerdiv_p}>© Copyright 2023 HSA Internet. </p>
          <p className={styles.footerdiv_p}>
            All rights reserved.{" "}
            <span className={styles.footerdiv_span}>Terms and conditions</span>
          </p>
        </div>
      </section>
      
      <section className={styles.footer}>
        <div></div>
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
