import React from "react";
import "./Main.css";

import Navbar from "../navbar/Navbar";

function MainPage() {
  return (
    <div>
      <div className="hero-image d-flex justify-content-center align-items-center" />
      <Navbar />
      <div className="container maintext border rounded p-4 my-5">
        <h1 className="text-center display-3 ">Parking Lot Manager</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          accusantium explicabo expedita numquam provident doloribus ipsum!
          Doloribus, est deserunt? Dolore voluptatibus a perferendis facere
          repellat magnam, deserunt sapiente, quaerat voluptates maiores optio
          aut repellendus aliquid, cupiditate voluptas soluta obcaecati
          pariatur?
        </p>
      </div>
    </div>
  );
}

export default MainPage;
