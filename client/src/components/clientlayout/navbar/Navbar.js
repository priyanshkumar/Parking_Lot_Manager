import React from "react";
import logo from "./logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top d-flex justify-content-around px-5">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="links">
        <ul className="d-flex align-items-center justify-content-center p-0 m-0">
          <li className="px-3">Login</li>
          <li className="px-3">Login</li>
          <li className="px-3">
            <a href="/login">Login</a>
          </li>
          <li className="px-3">
            <a href="/signup" className="btn btn-outline-primary button">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
