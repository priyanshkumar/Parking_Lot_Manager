import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";
import Axios from "axios";

class Navbar extends React.Component {
  state = {
    authenticated: false
  };

  componentDidMount() {
    Axios.get("/api/isAuthenticated").then(result => {
      this.setState({ authenticated: result.data });
    });
  }

  render() {
    return (
      <nav className="navbar sticky-top bg-white d-flex justify-content-between px-5">
        <div className="logo ml-5">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links mr-5">
          <ul className="d-flex align-items-center justify-content-center p-0 m-0">
            {this.state.authenticated ? (
              <div className="d-flex align-items-center justify-content-center">
                <li className="px-3">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="px-3">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="px-3">
                  <Link to="/userSpots">Your Spot</Link>
                </li>
                <li className="px-3">
                  <a
                    href="/auth/logout"
                    className="btn btn-outline-primary button"
                  >
                    Log Out
                  </a>
                </li>
              </div>
            ) : (
              <div className="d-flex align-items-center justify-content-center">
                <li className="px-3">
                  <Link to="/login">Login</Link>
                </li>
                <li className="px-3">
                  <Link to="/signup" className="btn btn-outline-primary button">
                    Get Started
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
