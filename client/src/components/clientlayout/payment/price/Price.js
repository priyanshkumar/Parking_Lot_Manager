import React from "react";
import "./Price.css";
import TRow from "./tRow/TRow";
function Price({ checkoutData, totalPrice }) {
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
          {checkoutData.map(data => {
            return <TRow data={data} key={data.id} />;
          })}
          <tr>
            <td />
            <td />
            <th scope="row"> Total </th>
            <th scope="row">${totalPrice}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Price;
