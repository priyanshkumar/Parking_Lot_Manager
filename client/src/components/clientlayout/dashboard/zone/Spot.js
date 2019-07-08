import React from "react";

function Spot(props) {
  return (
    <button
        style={{ width: "50px" }}
        className={`btn btn-${props.color} p-2 m-2`}
        disabled={props.status}
      >
        {props.spot}
      </button>
  );
}

export default Spot;
