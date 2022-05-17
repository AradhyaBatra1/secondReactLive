import logo from './logo.svg';
import './App.css';

import MainPage from './Components/MainPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import AnnualReport from './Components/AnnualReport';
import Blogs from './Components/Blogs';
import SignUp from './Components/SignUp';
import Teams from './Components/Teams';



function App() {
  return (
    <>
      <Router>
        <MainPage />

       
        <Routes>
          <Route exact path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/events" element={<Events />} />
        </Routes>
        <Routes>
          <Route exact path="/annual" element={<AnnualReport />} />
        </Routes>
        <Routes>
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route exact path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
