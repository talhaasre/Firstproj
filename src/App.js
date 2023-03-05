import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MetaDecorator from "./components/MetaDecorator/MetaDecorator";
import Routing from "./Routing";

function App() {
  return (
    <>
      <MetaDecorator
        // metaTitle="UpGrad Living"
        metaTitle="Talha Asre | Frontend Developer & Mentor"
        metaDesc="I develop and code pixel perfect sites & apps, and I love what I do."
        canonicalLink={window.location}
      />
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
