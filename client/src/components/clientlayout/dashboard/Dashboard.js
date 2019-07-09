import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Modal from "./zoneCard/zone/Modal";
import Selected from "./selected/Selected";
import ZoneCard from "./zoneCard/ZoneCard";

class Dashboard extends Component {
  state = {
    Spots1: [
      { id: "1", spot: "P1", isAllocated: false },
      { id: "2", spot: "P2", isAllocated: false },
      { id: "3", spot: "P3", isAllocated: false },
      { id: "4", spot: "P4", isAllocated: false },
      { id: "5", spot: "P5", isAllocated: false },
      { id: "6", spot: "P6", isAllocated: false },
      { id: "7", spot: "P7", isAllocated: false },
      { id: "8", spot: "P8", isAllocated: false },
      { id: "9", spot: "P9", isAllocated: true },
      { id: "10", spot: "P10", isAllocated: true },
      { id: "11", spot: "P11", isAllocated: false },
      { id: "12", spot: "P12", isAllocated: false },
      { id: "13", spot: "P13", isAllocated: true },
      { id: "14", spot: "P14", isAllocated: false },
      { id: "15", spot: "P15", isAllocated: false },
      { id: "16", spot: "P16", isAllocated: false }
    ],

    Spots2: [
      { id: "1", spot: "R1", isAllocated: false },
      { id: "2", spot: "R2", isAllocated: false },
      { id: "3", spot: "R3", isAllocated: false },
      { id: "4", spot: "R4", isAllocated: false },
      { id: "5", spot: "R5", isAllocated: false },
      { id: "6", spot: "R6", isAllocated: true },
      { id: "7", spot: "R7", isAllocated: true },
      { id: "8", spot: "R8", isAllocated: true },
      { id: "9", spot: "R9", isAllocated: true },
      { id: "10", spot: "R10", isAllocated: false },
      { id: "11", spot: "R11", isAllocated: false },
      { id: "12", spot: "R12", isAllocated: false },
      { id: "13", spot: "R13", isAllocated: true },
      { id: "14", spot: "R14", isAllocated: false },
      { id: "15", spot: "R15", isAllocated: false },
      { id: "16", spot: "R16", isAllocated: false }
    ],
    Spots3: [
      { id: "1", spot: "S1", isAllocated: false },
      { id: "2", spot: "S2", isAllocated: false },
      { id: "3", spot: "S3", isAllocated: false },
      { id: "4", spot: "S4", isAllocated: true },
      { id: "5", spot: "S5", isAllocated: true },
      { id: "6", spot: "S6", isAllocated: true },
      { id: "7", spot: "S7", isAllocated: false },
      { id: "8", spot: "S8", isAllocated: false },
      { id: "9", spot: "S9", isAllocated: false },
      { id: "10", spot: "S10", isAllocated: false },
      { id: "11", spot: "S11", isAllocated: false },
      { id: "12", spot: "S12", isAllocated: true },
      { id: "13", spot: "S13", isAllocated: true },
      { id: "14", spot: "S14", isAllocated: false },
      { id: "15", spot: "S15", isAllocated: false },
      { id: "16", spot: "S16", isAllocated: false }
    ],
    Selected: [
      {
        id: "1",
        spot: "S10"
      }
    ]
  };

  zones = [
    {
      title: "Parking A",
      price: "200$",
      subTitle: "Cars Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#spot1"
    },
    {
      title: "Parking B",
      price: "400$",
      subTitle: "Trucks Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#spot2"
    },
    {
      title: "Parking c",
      price: "500$",
      subTitle: "Trailors Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#spot3"
    }
  ];
  render() {
    return (
      <div>
        <Navbar />
        <div className="mt-5 container">
          {/* Top form begins here */}
          {this.state.Selected && (
            <div className="px-5">
              <div className="row">
                <div className="col-12">
                  <h1>Selected</h1>
                </div>
              </div>
              <hr />
              <div className="row mb-2">
                <div className="col">
                  {this.state.Selected.map(select => (
                    <Selected id={select.id} spot={select.spot} />
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary">CHECKOUT</button>
                </div>
              </div>
            </div>
          )}

          {/* Spots arrangement */}

          {/* <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#spot1"
              >
                Spot 1
              </button> */}

          <Modal spot={this.state.Spots1} id={"spot1"} />
          <Modal spot={this.state.Spots2} id={"spot2"} />
          <Modal spot={this.state.Spots3} id={"spot3"} />

          <div className="row my-5">
            {this.zones.map(zone => (
              <ZoneCard data={zone} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
