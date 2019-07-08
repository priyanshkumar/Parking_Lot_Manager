import React from "react";
import "./Login.css";

import Navbar from "../navbar/Navbar";

function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center">
        <h1>Log in</h1>
      </div>
    </div>
  );
}

export default MainPage;
