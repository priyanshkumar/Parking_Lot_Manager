import React from "react";
import Spot from "./Spot";

function Modal({ spot, id }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body display-flex">
            {spot.map(spot => ( 
              <Spot
                key={spot.id}
                spot={spot.spot}
                color={spot.isAllocated ? "secondary" : "primary"}
                status={spot.isAllocated && "disabled"}
              />
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              classNameName="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
