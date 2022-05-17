import React from "react";
import s11 from './s11.avif'
import './About.css';

const About = () => {
  return (
    <div>
      <div className="container">
        <img src={s11} alt="" />
              <div class="centered">
                  <h1>Welcome To About Section</h1>
                  <button className="button-3">Watch Vlogs</button>
                  <button className="button-3">Watch Blogs</button>
        </div>
      </div>
    </div>
  );
};

export default About;
