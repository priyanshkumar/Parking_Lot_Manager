import React from "react";

function Zone(props) {
  return (
    <div className="d-flex">
      <button
        style={{ width: "50px" }}
        className={`btn btn-${props.color} p-2 m-2`}
        disabled={props.status}
      >
        {props.spot}
      </button>
    </div>
  );
}

export default Zone;
