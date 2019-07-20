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
    closeCkeckerSelected: [],
    closeSelected: []
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
    this.setState({ tmpSelected: [] });
    axios
      .get("/api/getParkingSpots")
      .then(result => {
        console.log(result.data);
        this.populateZone(result);
      })
      .catch(err => {
        console.log(err);
      });

    //to retrieve user info from cookie
    // axios
    //   .get("http://localhost:3001/auth/user", { withCredentials: true })
    //   .then(response => {
    //     //check if user is authenticated and acquire user info
    //     const user = response.data.user;
    //     console.log(user);
    //     this.setState({ user, authenticated: true });
    //   });
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
      console.log(this.state.tmpSelected);
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

  selectModalClick = () => {
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
      this.setState({
        Selected: this.state.Selected.filter(item => {
          return item.spot !== spot.spot;
        }, this.spotClick(spot.spot, spot.zone))
      });
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.user.emailId}</h1>
        <Navbar reload={"true"}/>
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
                  <a className="btn btn-primary" href="/payment">
                    CHECKOUT
                  </a>
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
