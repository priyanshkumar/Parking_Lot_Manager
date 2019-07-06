import React, { Component } from "react";
import Spot1 from "../zone/Spot1";
import Spot2 from "../zone/Spot2";
import Spot3 from "../zone/Spot3";

class Dashboard extends Component {
  state = {
    Spots1: [
      { id: "1", spot: "P1" },
      { id: "2", spot: "P2" },
      { id: "3", spot: "P3" },
      { id: "4", spot: "P4" },
      { id: "5", spot: "P5" },
      { id: "6", spot: "P6" },
      { id: "7", spot: "P7" },
      { id: "8", spot: "P8" },
      { id: "9", spot: "P9" },
      { id: "10", spot: "P10" },
      { id: "11", spot: "P11" },
      { id: "12", spot: "P12" },
      { id: "13", spot: "P13" },
      { id: "14", spot: "P14" },
      { id: "15", spot: "P15" },
      { id: "16", spot: "P16" }
    ],
    Spots2: [
      { id: "1", spot: "R1" },
      { id: "2", spot: "R2" },
      { id: "3", spot: "R3" },
      { id: "4", spot: "R4" },
      { id: "5", spot: "R5" },
      { id: "6", spot: "R6" },
      { id: "7", spot: "R7" },
      { id: "8", spot: "R8" },
      { id: "9", spot: "R9" },
      { id: "10", spot: "R10" },
      { id: "11", spot: "R11" },
      { id: "12", spot: "R12" },
      { id: "13", spot: "R13" },
      { id: "14", spot: "R14" },
      { id: "15", spot: "R15" },
      { id: "16", spot: "R16" }
    ],
    Spots3: [
      { id: "1", spot: "S1" },
      { id: "2", spot: "S2" },
      { id: "3", spot: "S3" },
      { id: "4", spot: "S4" },
      { id: "5", spot: "S5" },
      { id: "6", spot: "S6" },
      { id: "7", spot: "S7" },
      { id: "8", spot: "S8" },
      { id: "9", spot: "S9" },
      { id: "10", spot: "S10" },
      { id: "11", spot: "S11" },
      { id: "12", spot: "S12" },
      { id: "13", spot: "S13" },
      { id: "14", spot: "S14" },
      { id: "15", spot: "S15" },
      { id: "16", spot: "S16" }
    ]
  };

  render() {
    return (
      <div>
        <div className="full-spread d-flex justify-content-center align-items-center">
          <div className="container">
            {/* Top form begins here */}
            <div className="">
              <div className="d-flex justify-content-center row border border-light p-5 mb-5 w-100 bg-light rounded">
                <form action="">
                  <div className="form-group text-center font-weight-bold">
                    <label htmlFor="name">PARKING SPOTS SELECTED</label>
                    <input
                      className="form-control d-inline"
                      type="text"
                      id="selectedSpots"
                      placeholder=""
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-warning d-inline mx-2"
                      type="submit"
                    >
                      CLEAR SELECTION
                    </button>
                    <button
                      className="btn btn-success d-inline mx-2"
                      type="submit"
                    >
                      BOOK MY SPOTS
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Spots arrangement */}
            <div className="row border border-light bg-light rounded p-3 mb-5">
              <div className="d-flex flex-wrap justify-content-between col-4">
                {this.state.Spots1.map(spot => (
                  <Spot1 key={spot.id} spot={spot.spot} />
                ))}
              </div>
              <div className="d-flex flex-wrap justify-content-between col-4">
                {this.state.Spots2.map(spot => (
                  <Spot2 key={spot.id} spot={spot.spot} />
                ))}
              </div>
              <div className="d-flex flex-wrap justify-content-between col-4">
                {this.state.Spots3.map(spot => (
                  <Spot3 key={spot.id} spot={spot.spot} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
