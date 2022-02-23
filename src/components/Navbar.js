import React from "react";
import navLogo from '../images/logo512.png'

function Navbar() {
  return (
    <>
        <header className="">
            <div className="container d-flex header-wrap">
                <a href="https://google.com" className="logo">
                    <img src={navLogo} className="logo-img" alt="navLogo" />
                    <span className="logo-text">ReactFacts</span>
                </a>
                <span className="header-title">React Course - Project 1</span>
            </div>
        </header>
    </>
  );
}

export default Navbar;
