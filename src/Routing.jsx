import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ContactURL, homeURL } from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";
import ContactUs from "./pages/ContactUs/ContactUs";

const Routing = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path={homeURL} element={<Homepage />} />
        <Route path={ContactURL} element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default Routing;
