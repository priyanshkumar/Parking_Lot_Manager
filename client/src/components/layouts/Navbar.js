import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark mb-5">
      <div className="container">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <ul className="navbar-nav text-light d-flex flex-row">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                <i className="fas fa-user" />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/">
                  Home
                </Link>
                <Link className="dropdown-item" to="/login">
                  Log in
                </Link>
                <Link className="dropdown-item" to="/signup">
                  Sign up
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
