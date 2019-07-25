import React from "react";

function TRow({ data }) {
  return (
    <tr>
      <th scope="row">{data.spotName}</th>
      <td>{data.spotZone}</td>
      <td>{data.spotType}</td>
      <td>{data.spotPrice}</td>
    </tr>
  );
}

export default TRow;
