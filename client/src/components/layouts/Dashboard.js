import React, { Component } from "react";
import Spot from "./Spot";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="hero-image d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row mb-5">
              <div className="d-flex col-4">
                <div className="col-3">
                  <Spot />
                </div>
              </div>
              <div className="col-4">
                <Spot />
              </div>
              <div className="col-4">
                <Spot />
              </div>
            </div>
            <div className="container d-flex justify-content-center">
              <div className="row">
                <form action="">
                  <div class="form-group text-center font-weight-bold">
                    <label for="name">PARKING SPOTS SELECTED</label>
                    <input
                      class="form-control"
                      type="text"
                      id="selectedSpots"
                      placeholder=""
                    />
                  </div>
                  <button class="btn btn-warning btn-block" type="submit">
                    CLEAR SELECTION
                  </button>
                  <button class="btn btn-success btn-block" type="submit">
                    BOOK MY SPOTS
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
