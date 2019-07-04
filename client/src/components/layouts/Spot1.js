import React from "react";

function Spot1(props) {
  return (
    <div className="d-flex">
      <button className="btn btn-primary p-2 m-2">{props.spot}</button>
    </div>
  );
}

export default Spot1;
