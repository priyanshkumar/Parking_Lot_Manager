import React from "react";
import "./Login.css";
import "bootstrap-social";

function MainPage() {
  return (
    <div>
      <div className="full-spread d-flex justify-content-center align-items-center">
        <h1>Log in</h1>

        <a
          class="btn btn-block btn-social btn-google"
          href="http://localhost:3001/auth/google"
        >
          <span class="fa fa-google" /> Sign in with Google
        </a>
      </div>
    </div>
  );
}

export default MainPage;
