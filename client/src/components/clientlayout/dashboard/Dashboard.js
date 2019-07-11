import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Modal from "./zoneCard/zone/Modal";
import Selected from "./selected/Selected";
import ZoneCard from "./zoneCard/ZoneCard";

class Dashboard extends Component {
  state = {
    Selected: [],
    tmpSelected: []
  };

  zonesSpot = {
    Spots1: [
      { id: "1", spot: "P1", isAllocated: false, isPending: false },
      { id: "2", spot: "P2", isAllocated: false, isPending: false },
      { id: "3", spot: "P3", isAllocated: false, isPending: false },
      { id: "4", spot: "P4", isAllocated: false, isPending: false },
      { id: "5", spot: "P5", isAllocated: false, isPending: false },
      { id: "6", spot: "P6", isAllocated: false, isPending: false },
      { id: "7", spot: "P7", isAllocated: false, isPending: false },
      { id: "8", spot: "P8", isAllocated: false, isPending: false },
      { id: "9", spot: "P9", isAllocated: true, isPending: false },
      { id: "10", spot: "P10", isAllocated: true, isPending: false },
      { id: "11", spot: "P11", isAllocated: false, isPending: false },
      { id: "12", spot: "P12", isAllocated: false, isPending: false },
      { id: "13", spot: "P13", isAllocated: true, isPending: false },
      { id: "14", spot: "P14", isAllocated: false, isPending: false },
      { id: "15", spot: "P15", isAllocated: false, isPending: false },
      { id: "16", spot: "P16", isAllocated: false, isPending: false }
    ],

    Spots2: [
      { id: "1", spot: "R1", isAllocated: false, isPending: false },
      { id: "2", spot: "R2", isAllocated: false, isPending: false },
      { id: "3", spot: "R3", isAllocated: false, isPending: false },
      { id: "4", spot: "R4", isAllocated: false, isPending: false },
      { id: "5", spot: "R5", isAllocated: false, isPending: false },
      { id: "6", spot: "R6", isAllocated: true, isPending: false },
      { id: "7", spot: "R7", isAllocated: true, isPending: false },
      { id: "8", spot: "R8", isAllocated: true, isPending: false },
      { id: "9", spot: "R9", isAllocated: true, isPending: false },
      { id: "10", spot: "R10", isAllocated: false, isPending: false },
      { id: "11", spot: "R11", isAllocated: false, isPending: false },
      { id: "12", spot: "R12", isAllocated: false, isPending: false },
      { id: "13", spot: "R13", isAllocated: true, isPending: false },
      { id: "14", spot: "R14", isAllocated: false, isPending: false },
      { id: "15", spot: "R15", isAllocated: false, isPending: false },
      { id: "16", spot: "R16", isAllocated: false, isPending: false }
    ],
    Spots3: [
      { id: "1", spot: "S1", isAllocated: false, isPending: false },
      { id: "2", spot: "S2", isAllocated: false, isPending: false },
      { id: "3", spot: "S3", isAllocated: false, isPending: false },
      { id: "4", spot: "S4", isAllocated: true, isPending: false },
      { id: "5", spot: "S5", isAllocated: true, isPending: false },
      { id: "6", spot: "S6", isAllocated: true, isPending: false },
      { id: "7", spot: "S7", isAllocated: false, isPending: false },
      { id: "8", spot: "S8", isAllocated: false, isPending: false },
      { id: "9", spot: "S9", isAllocated: false, isPending: false },
      { id: "10", spot: "S10", isAllocated: false, isPending: false },
      { id: "11", spot: "S11", isAllocated: false, isPending: false },
      { id: "12", spot: "S12", isAllocated: true, isPending: false },
      { id: "13", spot: "S13", isAllocated: true, isPending: false },
      { id: "14", spot: "S14", isAllocated: false, isPending: false },
      { id: "15", spot: "S15", isAllocated: false, isPending: false },
      { id: "16", spot: "S16", isAllocated: false, isPending: false }
    ]
  };

  zones = [
    {
      title: "Parking A",
      price: "200$",
      subTitle: "Cars Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#Spots1"
    },
    {
      title: "Parking B",
      price: "400$",
      subTitle: "Trucks Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#Spots2"
    },
    {
      title: "Parking C",
      price: "500$",
      subTitle: "Trailors Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#Spots3"
    }
  ];

  filterCall = (zoneCall, spot, update) => {
    let index = zoneCall.findIndex(ele => {
      return ele.spot === spot;
    });
    zoneCall[index].isPending = update;
    // console.log(zoneCall[index]);
  };

  spotClick = (spot, zone) => {
    if (zone === "Spots1") {
      this.filterCall(this.zonesSpot.Spots1, spot, true);
    } else if (zone === "Spots2") {
      this.filterCall(this.zonesSpot.Spots2, spot, true);
    } else if (zone === "Spots3") {
      this.filterCall(this.zonesSpot.Spots3, spot, true);
    }
    this.setState({ tmpSelected: this.state.tmpSelected.concat({ spot }) });
  };

  selectModalClick = () => {
    this.setState({
      Selected: this.state.Selected.concat(this.state.tmpSelected)
    });

    this.setState({
      tmpSelected: []
    });
  };

  closeModalClick = zone => {
    this.state.tmpSelected.map(spot => {
      if (zone === "Spots1") {
        this.filterCall(this.zonesSpot.Spots1, spot.spot, false);
      } else if (zone === "Spots2") {
        this.filterCall(this.zonesSpot.Spots2, spot.spot, false);
      } else if (zone === "Spots3") {
        this.filterCall(this.zonesSpot.Spots3, spot.spot, false);
      }
      return "done";
    });
    this.setState({
      tmpSelected: []
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="mt-5 container">
          {/* Top form begins here */}
          {this.state.Selected[0] && (
            <div className="px-5">
              <div className="row">
                <div className="col-12">
                  <h1>Selected</h1>
                </div>
              </div>
              <hr />
              <div className="row mb-2">
                <div className="col-12 d-flex">
                  {this.state.Selected.map(select => (
                    <Selected spot={select.spot} key={select.spot} />
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
          <Modal
            spot={this.zonesSpot.Spots1}
            id={"Spots1"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.zonesSpot.Spots2}
            id={"Spots2"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.zonesSpot.Spots3}
            id={"Spots3"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />

          <div className="row my-5">
            {this.zones.map(zone => (
              <ZoneCard data={zone} key={zone.title} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
