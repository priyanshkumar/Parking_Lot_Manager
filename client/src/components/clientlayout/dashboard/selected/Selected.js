import React from "react";

function Selected({ id }) {
  return (
    <div>
      <button className="btn btn-primary">{id}</button>
    </div>
  );
}

export default Selected;
