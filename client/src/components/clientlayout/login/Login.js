import React from "react";
import "./Login.css";
import "bootstrap-social";
import Navbar from "../navbar/Navbar";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center">
          <div className="btn-group-vertical">
            <a
              className="btn btn-block btn-social btn-google"
              href="http://localhost:3001/auth/google"
            >
              <span className="fab fa-google" /> Sign in with Google
            </a>

            <a
              className="btn btn-block btn-social btn-github"
              href="http://localhost:3001/auth/github"
            >
              <span className="fab fa-github" /> Sign in with Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
