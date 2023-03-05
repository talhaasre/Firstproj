import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { homeURL } from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={homeURL} element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
