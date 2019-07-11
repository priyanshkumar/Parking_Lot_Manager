import React from "react";
import "./Login.css";
import "bootstrap-social";

import Navbar from "../navbar/Navbar";
import axios from "axios";

class MainPage extends React.Component {
  getAuth = () => {
    axios.get("/auth/google/");
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center">
          <div className="btn-group-vertical">
            <button
              className="btn btn-block btn-social btn-google"
              onClick={() => {
                this.getAuth();
              }}
            >
              <span className="fab fa-google" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
