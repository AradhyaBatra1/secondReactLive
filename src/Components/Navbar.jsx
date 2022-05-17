import React from 'react'
import img11 from "./img1.png";
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <header>
        <section className="navsection">
          <div className="logo">
            <h1>CompanyLogo</h1>
          </div>
          <nav>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">Porfolio</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </section>
        <main>
          <div className="leftside">
            <h3>Hello</h3>
            <h1>I am Aradhya Batra</h1>
            <h2>web developer</h2>
            <a href="#" className="button-3">
              Hire me
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="#" className="button-3">
              Contact me
            </a>
          </div>
          <div className="rightside">
            <img src={img11} alt="" />
          </div>
        </main>
      </header>
    </>
  );
}
