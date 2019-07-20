import React from "react";
import "./Price.css";

function Price() {
  return (
    <div className="row m-3 p-4 pricesec">
      <div className="col-3 text-center">
        <h2>SpotName</h2>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        Zone
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        Cars
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        Price
      </div>
    </div>
  );
}
export default Price;
