import React from "react";
import logo from "./logo.png";
import "./navbar.css";
import Axios from "axios";

class Navbar extends React.Component {
  state = {
    authenticated: ""
  };

  componentDidMount() {
    Axios.get("/api/isAuthenticated").then(result => {
      this.setState({ authenticated: result.data });
    });
  }

  render() {
    return (
      <nav className="navbar sticky-top bg-white d-flex justify-content-around px-5">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="links">
          <ul className="d-flex align-items-center justify-content-center p-0 m-0">
            {this.state.authenticated ? (
              <div className="d-flex align-items-center justify-content-center">
                <li className="px-3">
                  <a href="/profile">Profile</a>
                </li>
                <li className="px-3">
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="px-3">
                  <a
                    href="http://localhost:3001/auth/logout"
                    className="btn btn-outline-primary button"
                  >
                    Log Out
                  </a>
                </li>
              </div>
            ) : (
              <div className="d-flex align-items-center justify-content-center">
                <li className="px-3">
                  <a href="/login">Login</a>
                </li>
                <li className="px-3">
                  <a href="/signup" className="btn btn-outline-primary button">
                    Get Started
                  </a>
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
