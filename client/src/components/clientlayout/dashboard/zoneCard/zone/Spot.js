import React from "react";

function Spot(props) {
  return (
    <button
      style={{ width: "50px" }}
      className={`${props.id} btn btn-${props.color} p-2 m-2`}
      disabled={props.status}
      onClick={() => props.spotClick(props.spot.spotName, props.zoneid)}
    >
      {props.spot.spotName}
    </button>
  );
}

export default Spot;
