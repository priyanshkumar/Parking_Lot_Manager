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
      </div>
    </div>
  );
}

export default MainPage;
