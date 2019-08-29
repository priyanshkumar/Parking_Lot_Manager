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
    tmpSelected: [],
    user: {},
    authenticated: false,
    isClicked: false,
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    closeCkeckerSelected: []
  };

  zones = [
    {
      title: "Cars Only",
      price: "$200/mth",
      subTitle: "Zone A",
      content: "Parking allocated for cars",
      buttonID: "#A"
    },
    {
      title: "Trucks Only",
      price: "$400/mth",
      subTitle: "Zone B",
      content: "Parking for trucks up to 25ft long",
      buttonID: "#B"
    },
    {
      title: "Trailors Only",
      price: "$350/mth",
      subTitle: "Zone C",
      content: "Parking for trailers up to 53ft long",
      buttonID: "#C"
    },
    {
      title: "Trucks with Trailors",
      price: "$520/mth",
      subTitle: "Zone D",
      content: "Parking for trucks and trailers up to 75ft long",
      buttonID: "#D"
    },
    {
      title: "Others",
      price: "$275/mth",
      subTitle: "Zone E",
      content: "Storage for equipment up to 20ft long",
      buttonID: "#E"
    }
  ];

  populateZone = array => {
    array.data.map(obj => {
      if (obj.spotZone === "A") {
        this.setState({
          A: this.state.A.concat(obj)
        });
      } else if (obj.spotZone === "B") {
        this.setState({
          B: this.state.B.concat(obj)
        });
      } else if (obj.spotZone === "C") {
        this.setState({
          C: this.state.C.concat(obj)
        });
      } else if (obj.spotZone === "D") {
        this.setState({
          D: this.state.D.concat(obj)
        });
      } else if (obj.spotZone === "E") {
        this.setState({
          E: this.state.E.concat(obj)
        });
      }

      return "Done";
    });
  };

  componentDidMount() {
    axios
      .get("/api/getParkingSpots")
      .then(result => {
        console.log(result);
        if (result.data) {
          if (result.data.redirecturl === "login") {
            this.props.history.push("/login");
          } else {
            this.populateZone(result);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ tmpSelected: [] });
  }

  filterCall = (zoneCall, spot, zone) => {
    let index = zoneCall.findIndex(ele => {
      return ele.spotName === spot;
    });
    if (zoneCall[index].isPending) {
      this.setState(
        {
          tmpSelected: this.state.tmpSelected.filter(e => {
            return e.spot !== spot;
          }),
          closeCkeckerSelected: this.state.closeCkeckerSelected.filter(e => {
            return e.spot !== spot;
          })
        },
        () => {
          this.setState({ isClicked: false });
        }
      );
      zoneCall[index].isPending = false;
    } else if (!zoneCall[index].isPending) {
      this.setState(
        {
          tmpSelected: this.state.tmpSelected.concat({ spot, zone }),
          closeCkeckerSelected: this.state.closeCkeckerSelected.concat({
            spot,
            zone
          })
        },
        () => {
          this.setState({ isClicked: false });
        }
      );
      zoneCall[index].isPending = true;
    }
  };

  spotClick = (spot, zone) => {
    if (zone === "A") {
      this.filterCall(this.state.A, spot, zone);
    } else if (zone === "B") {
      this.filterCall(this.state.B, spot, zone);
    } else if (zone === "C") {
      this.filterCall(this.state.C, spot, zone);
    } else if (zone === "D") {
      this.filterCall(this.state.D, spot, zone);
    } else if (zone === "E") {
      this.filterCall(this.state.E, spot, zone);
    }

    this.setState({ isClicked: true });
  };

  search = (spotzone, spot, calling) => {
    let index = spotzone.findIndex(ele => {
      return ele.spotName === spot;
    });
    if (calling === true) {
      spotzone[index].isCheckout = true;
    } else {
      spotzone[index].isCheckout = false;
    }
  };

  selectModalClick = () => {
    this.state.tmpSelected.map(spot => {
      if (spot.zone === "A") {
        this.search(this.state.A, spot.spot, true);
      } else if (spot.zone === "B") {
        this.search(this.state.B, spot.spot, true);
      } else if (spot.zone === "C") {
        this.search(this.state.C, spot.spot, true);
      } else if (spot.zone === "D") {
        this.search(this.state.D, spot.spot, true);
      } else if (spot.zone === "E") {
        this.search(this.state.E, spot.spot, true);
      }
      return "done";
    });
    this.setState({
      Selected: this.state.tmpSelected,
      closeCkeckerSelected: []
    });
  };

  closeModalClick = zone => {
    this.state.closeCkeckerSelected.map(spot => {
      if (zone === "A") {
        this.filterCall(this.state.A, spot.spot, zone);
      } else if (zone === "B") {
        this.filterCall(this.state.B, spot.spot, zone);
      } else if (zone === "C") {
        this.filterCall(this.state.C, spot.spot, zone);
      } else if (zone === "D") {
        this.filterCall(this.state.D, spot.spot, zone);
      } else if (zone === "E") {
        this.filterCall(this.state.E, spot.spot, zone);
      }
      return "done";
    });
    this.setState({ closeCkeckerSelected: [] });
  };

  deleteItemSelected = (e, spot) => {
    if (e) {
      if (spot.zone === "A") {
        this.search(this.state.A, spot.spot, false);
      } else if (spot.zone === "B") {
        this.search(this.state.B, spot.spot, false);
      } else if (spot.zone === "C") {
        this.search(this.state.C, spot.spot, false);
      } else if (spot.zone === "D") {
        this.search(this.state.D, spot.spot, false);
      } else if (spot.zone === "E") {
        this.search(this.state.E, spot.spot, false);
      }
      this.setState({
        Selected: this.state.Selected.filter(item => {
          return item.spot !== spot.spot;
        }, this.spotClick(spot.spot, spot.zone))
      });
    }
  };

  checkout = () => {
    axios
      .put("/api/checkout", this.state.Selected)
      .then(result => {
        if (result.data.redirecturl === "payment") {
          this.props.history.push("/payment");
        } else if (result.data.redirecturl === "dashboard") {
          this.props.history.push("/dashboard");
        }
      })
      .catch(err => {
        console.log(err);
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
                    <Selected
                      spot={select}
                      key={select.spot}
                      deleteItemSelected={this.deleteItemSelected}
                    />
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.checkout();
                    }}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Spots arrangement */}
          <Modal
            spot={this.state.A}
            id={"A"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
            isclicked={this.state.isClicked}
          />
          <Modal
            spot={this.state.B}
            id={"B"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.state.C}
            id={"C"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.state.D}
            id={"D"}
            spotClick={this.spotClick}
            selectModal={this.selectModalClick}
            closeModal={this.closeModalClick}
          />
          <Modal
            spot={this.state.E}
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
