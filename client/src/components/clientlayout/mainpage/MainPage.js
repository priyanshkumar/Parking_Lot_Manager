import React from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";

function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="hero-image d-flex justify-content-center align-items-center">
        <div className="w-50 p-5 text-center">
          <h5>
            Our parking lot manages over 600 spots in a convenient location in
            Brampton. If you park regularly at the same location, our discounted
            monthly parking rates may be right for you.
            <br />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
