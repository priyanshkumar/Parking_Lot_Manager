import React from "react";
import "./Login.css";
import "bootstrap-social";
import Navbar from "../navbar/Navbar";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar reload={"true"} />
        <div className="full-spread d-flex justify-content-center align-items-center">
          <div className="signupbox border rounded p-5">
            <h5 className="text-center text-white">
              Sign in with your Google or Github account
            </h5>
            <hr class="bg-light" />
            <div className="d-flex justify-content-center mb-3">
              <a
                className="btn btn-social btn-google mx-1"
                href="http://localhost:3001/auth/google"
              >
                <span className="fab fa-google" /> Sign in with Google
              </a>
              <br />

              <a
                className="btn btn-success btn-social btn-github"
                href="http://localhost:3001/auth/github"
              >
                <span className="fab fa-github" /> Sign in with Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
