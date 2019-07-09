import React from "react";
import "./ZoneCard.css";

function ZoneCard({ data }) {
  return (
    <div className="col-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <h4>{data.title}</h4>
          <h5>{data.price}</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">{data.subTitle}</h5>
          <p class="card-text">{data.content}</p>
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
