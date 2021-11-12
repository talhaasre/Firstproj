import React from 'react';
import './App.css';
import OurServices from './components/OurServices/OurServices';
import AtGlance from './components/AtGlance/AtGlance';
import PopularCourses from './components/PopularCourses/PopularCourses';
import SubscribeNews from './components/Subscribe/SubscribeNews';
import Navbar from './components/Navbar/Navbar';
import FooterNav from './components/FooterNav/FooterNav';
import Copyright from './components/Copyright/Copyright';

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
