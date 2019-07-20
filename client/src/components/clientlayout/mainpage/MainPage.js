import React from "react";
import "./Main.css";

import Navbar from "../navbar/Navbar";

function MainPage() {
  return (
    <div>
      <Navbar reload={"true"} />
      <div className="hero-image d-flex flex-column justify-content-start align-items-start">
        <div className="content w-25 p-5 text-center">
          <h2>Welcome</h2>
          <p className="text-white bg-dark p-3 maintext rounded">
            Our parking lot manages over 600 spots in a convenient location in
            Brampton. If you park regularly at the same location, our discounted
            monthly parking rates may be right for you.
            <a href="/signup" className="btn btn-success button btn-block mt-2">
              Get Started
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
