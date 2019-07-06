import React from "react";
import "./Main.css";

function MainPage() {
  return (
    <div>
      <div className="full-spread d-flex justify-content-center align-items-center">
        <h1>Log in</h1>
        <div>
          <a href="http://localhost:3001/auth/google">Google</a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
