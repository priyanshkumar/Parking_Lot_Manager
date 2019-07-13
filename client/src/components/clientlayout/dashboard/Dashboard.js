import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Modal from "./zoneCard/zone/Modal";
import Selected from "./selected/Selected";
import ZoneCard from "./zoneCard/ZoneCard";
import axios from "axios";
import Parkingmap from "./parking-lot-map.jpg";

class Dashboard extends Component {
  state = {
    Selected: [],
    tmpSelected: []
  };

  zonesSpot = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: []
  };

  zones = [
    {
      title: "Parking A",
      price: "200$",
      subTitle: "Cars Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#A"
    },
    {
      title: "Parking B",
      price: "400$",
      subTitle: "Trucks Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#B"
    },
    {
      title: "Parking C",
      price: "500$",
      subTitle: "Trailors Only",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#C"
    },
    {
      title: "Parking D",
      price: "500$",
      subTitle: "Trucks with Trailors",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#D"
    },
    {
      title: "Parking E",
      price: "500$",
      subTitle: "Others",
      content:
        "With supporting text below as a natural lead-in to additional content.",
      buttonID: "#E"
    }
  ];

  populateZone = array => {
    array.data.map(obj => {
      // console.log(obj.spotZone);
      obj.isSpotAllocated = false;
      if (obj.spotZone === "A") {
        this.zonesSpot.A.push(obj);
      } else if (obj.spotZone === "B") {
        this.zonesSpot.B.push(obj);
      } else if (obj.spotZone === "C") {
        this.zonesSpot.C.push(obj);
      } else if (obj.spotZone === "D") {
        this.zonesSpot.D.push(obj);
      } else if (obj.spotZone === "E") {
        this.zonesSpot.E.push(obj);
      }

      // console.log(this.zonesSpot.A);
      return "Done";
    });
    // console.log(this.zonesSpot);
  };

  componentDidMount() {
    axios
      .get("/api/getParkingSpots")
      .then(result => {
        console.log(result.data);
        this.populateZone(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterCall = (zoneCall, spot, update) => {
    console.log(spot);
    let index = zoneCall.findIndex(ele => {
      return ele.spotName === spot;
    });
    console.log(index);
    zoneCall[index].isPending = update;
    // console.log(zoneCall[index]);
  };

  spotClick = (spot, zone) => {
    if (zone === "A") {
      this.filterCall(this.zonesSpot.A, spot, true);
    } else if (zone === "B") {
      this.filterCall(this.zonesSpot.B, spot, true);
    } else if (zone === "C") {
      this.filterCall(this.zonesSpot.C, spot, true);
    } else if (zone === "D") {
      this.filterCall(this.zonesSpot.D, spot, true);
    } else if (zone === "E") {
      this.filterCall(this.zonesSpot.E, spot, true);
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
      if (zone === "A") {
        this.filterCall(this.zonesSpot.A, spot.spot, false);
      } else if (zone === "B") {
        this.filterCall(this.zonesSpot.B, spot.spot, false);
      } else if (zone === "C") {
        this.filterCall(this.zonesSpot.C, spot.spot, false);
      } else if (zone === "D") {
        this.filterCall(this.zonesSpot.D, spot.spot, false);
      } else if (zone === "E") {
        this.filterCall(this.zonesSpot.E, spot.spot, false);
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
        <div className="container d-flex justify-content-center">
          <img className="w-75 mt-5" src={Parkingmap} alt="" />
        </div>

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
            spot={this.zonesSpot.A}
            id={"A"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.zonesSpot.B}
            id={"B"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.zonesSpot.C}
            id={"C"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.zonesSpot.D}
            id={"D"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.zonesSpot.E}
            id={"E"}
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
