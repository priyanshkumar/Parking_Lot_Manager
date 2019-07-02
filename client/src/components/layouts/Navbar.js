import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark mb-5">
      <div className="container">
        <div class="navbar-brand">
          <h1>Parking Manager</h1>
        </div>
        <div class="row">
          <ul class="navbar-nav ml-auto text-light d-flex">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup" class="nav-link">
                Sign up
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
