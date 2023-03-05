import React from "react";
import "./Copyright.scss";
import { payment } from "../../images";

const Copyright = () => {
  return (
    <div class="footer-copyright text-center py-3">© 2021 Copyright -
    <a > Talha Asre</a>
    <a class="socialct" href="#">
    <img class="socialc" src={payment} alt="payment image" />
    </a>
  </div>
  );
};

export default Copyright;
