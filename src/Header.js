import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav className="d-flex">
          <img src="logo512.png" alt="1" className="nav-img" />
          <ul className="nav-items d-flex">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
