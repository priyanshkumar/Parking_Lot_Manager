import React from "react";
import Spot from "./Spot";

function Modal({ spot, id, spotClick, selectModal, closeModal, isclicked }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Select your spots
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                closeModal(id);
              }}
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
                id={spot.id}
                zoneid={id}
                spot={spot}
                color={
                  spot.isAllocated
                    ? "secondary"
                    : spot.isPending
                    ? "success"
                    : "primary"
                }
                status={
                  (spot.isSpotAllocated && "disabled") ||
                  (isclicked && "disabled") ||
                  (spot.isCheckout && "disabled")
                }
                spotClick={spotClick}
              />
            ))}
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                closeModal(id);
              }}
            >
              Close
            </button> */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                selectModal();
              }}
              data-dismiss="modal"
            >
              Book Spots
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
