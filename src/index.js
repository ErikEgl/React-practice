import React from "react";
import ReactDOM from "react-dom";


function Header() {
  return (
    <>
    <header>
      <nav className="d-flex">
        <img src="logo512.png" alt="1" className="nav-img"/>
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
function MainContent() {
  return (
    <>
      <h1>Reasons I am exited to learn React</h1>
      <ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
        <li>Reason 4</li>
      </ol>
    </>
  );
}
function Footer() {
  return (
    <>
      <footer>
        <small> Erik All rights reserved</small>
      </footer>
    </>
  );
}

function TempName() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
ReactDOM.render(<TempName />, document.querySelector("#root"));