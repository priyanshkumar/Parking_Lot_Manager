import React from "react";
import "./Price.css";

function Price() {
  return (
    <div className="row m-3 p-4">
      <table className="table table-hover border border-dark">
        <thead className="thead-dark">
          <tr>
            <th>Spot Selected</th>
            <th>Zone</th>
            <th>Vehicle type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">A1</th>
            <td>A</td>
            <td>Trailers Only</td>
            <td>$400</td>
          </tr>
          <tr>
            <th scope="row">A2</th>
            <td>A</td>
            <td>Trailers Only</td>
            <td>$400</td>
          </tr>
          <tr>
            <th scope="row">B1</th>
            <td>B</td>
            <td>Trucks Only</td>
            <td>$500</td>
          </tr>
          <tr>
            <td />
            <td />
            <th scope="row"> Total </th>
            <th scope="row">$1300</th>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success d-flex mx-auto align-self-center">
        Confirm Checkout
      </button>
    </div>
  );
}
export default Price;
