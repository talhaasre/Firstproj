import React from 'react';
import OurServices from './pages/OurServices/OurServices';
import AtGlance from './pages/AtGlance/AtGlance';
import PopularCourses from './pages/PopularCourses/PopularCourses';
import SubscribeNews from './pages/Subscribe/SubscribeNews';
import Navbar from './pages/Navbar/Navbar';
import FooterNav from './pages/FooterNav/FooterNav';
import Copyright from './pages/Copyright/Copyright';

function App() {
  return (
    <>
    <div className="App">
    </div>
    <Navbar />
    <OurServices />
    <PopularCourses />
    <AtGlance />
    <SubscribeNews />
    <FooterNav />
    <Copyright />
    </>
  );
}

export default App;
