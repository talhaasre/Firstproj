import './App.css';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import OurServices from './components/OurServices/OurServices';
import PopularCourses from './components/PopularCourses/PopularCourses';
import AtGlance from './components/AtGlance/AtGlance';
import SubscribeNews from './components/Subscribe/SubscribeNews';
import FooterNav from './components/FooterNav/FooterNav';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <OurServices />
    <PopularCourses />
    <AtGlance />
    <SubscribeNews />
    <FooterNav />
    </>
  );
}

export default App;
