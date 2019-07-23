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
            <hr className="bg-light" />
            <div className="d-flex justify-content-center mb-3">
              <a
                className="btn btn-social btn-google mx-1"
                href="http://localhost:3001/auth/google"
              >
                <span className="fab fa-google" /> Sign in with Google
              </a>
              <br />

              <a
                className="btn btn-block btn-social btn-twitter"
                href="http://localhost:3001/auth/twitter"
              >
                <span className="fab fa-twitter" /> Sign in with Twitter
              </a>

              <a
                className="btn btn-block btn-social btn-facebook"
                href="http://localhost:3001/auth/facebook"
              >
                <span className="fab fa-facebook" /> Sign in with Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
