import React from "react";
import "./Login.css";
import "bootstrap-social";
import Navbar from "../navbar/Navbar";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="full-spread d-flex justify-content-center align-items-center">
          <div className="signupbox border rounded px-3 py-4 m-5">
            <h5 className="text-center">
              Sign in with your Google/Twitter/Facebook Account
            </h5>
            <hr />
            <div className="d-flex flex-column align-items-center">
              <a className="btn btn-social btn-google mb-2" href="/auth/google">
                <span className="fab fa-google" /> Sign in with Google
              </a>
              <a
                className="btn btn-social btn-twitter mb-2"
                href="/auth/twitter"
              >
                <span className="fab fa-twitter" /> Sign in with Twitter
              </a>
              <a
                className="btn btn-social btn-facebook mb-2"
                href="/auth/facebook"
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
