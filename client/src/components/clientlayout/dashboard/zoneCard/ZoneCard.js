import React from "react";
import "./ZoneCard.css";

function ZoneCard({ data }) {
  return (
    <div className="col-4">
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center bg-danger text-light">
          <h4>{data.title}</h4>
          <h5>{data.price}</h5>
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{data.subTitle}</h5>
          <p className="card-text">{data.content}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={data.buttonID}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default ZoneCard;
