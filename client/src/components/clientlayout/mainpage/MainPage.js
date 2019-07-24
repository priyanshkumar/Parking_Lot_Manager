import React from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";

function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="hero-image d-flex justify-content-start align-items-center">
        <div className="w-50 p-5 text-center">
          <h1 className="display-4 text-light">Welcome</h1>
          <h5 className="text-white">
            Our parking lot manages over 600 spots in a convenient location in
            Brampton. <br /> If you park regularly at the same location, our
            discounted monthly parking rates may be right for you.
            <br />
            <a href="/login" className="btn btn-success button btn-lg mt-2">
              Get Started
            </a>
          </h5>
        </div>
        {/* Modal popup below */}
        <div class="modal" id="openmodal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-success">
                <h5 class="modal-title text-white">Login</h5>
                <button class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                {/* Login auth icons */}
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group-vertical">
                    <a
                      className="btn btn-block btn-social btn-google"
                      href="http://localhost:3001/auth/google"
                    >
                      <span className="fab fa-google" /> Sign in with Google
                    </a>

                    <a
                      className="btn btn-block btn-social btn-twitter"
                      href="/auth/twitter"
                    >
                      <span className="fab fa-twitter" /> Sign in with Twitter
                    </a>

                    <a
                      className="btn btn-block btn-social btn-facebook"
                      href="/auth/facebook"
                    >
                      <span className="fab fa-facebook" /> Sign in with Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
