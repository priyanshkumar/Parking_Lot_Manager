import React from "react";
import "./Main.css";
import logowhite from "./logowhite.png";

function MainPage() {
  return (
    <div>
      <div className="hero-image d-flex flex-column justify-content-start align-items-start">
        <div className="content w-25 p-5 text-center">
          <h2>Welcome</h2>
          <img src={logowhite} alt="" />

          <p className="text-white bg-dark p-3 maintext rounded">
            Our parking lot manages over 600 spots in a convenient location in
            Brampton. If you park regularly at the same location, our discounted
            monthly parking rates may be right for you.
            <a
              href="/signup"
              className="btn btn-success button btn-block mt-2"
              data-toggle="modal"
              data-target="#openmodal"
            >
              Get Started
            </a>
          </p>
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
                      href="/auth/google"
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
