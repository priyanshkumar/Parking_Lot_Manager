import React from "react";

function Selected({ spot, deleteItemSelected }) {
  return (
    <div>
      <button
        className="mx-2 btn btn-primary"
        onClick={e => {
          if (window.confirm("Are you sure you wish to delete this item?"))
            deleteItemSelected(e, spot);
        }}
      >
        {spot.spot}
      </button>
    </div>
  );
}

export default Selected;
