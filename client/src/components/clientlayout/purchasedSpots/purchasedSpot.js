import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import TRow from "../payment/price/tRow/TRow";

class purchasedSpots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSpots: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/getUserSpots")
      .then(response => {
        if (response.data.redirecturl === "login") {
          this.props.history.push("/login");
        } else {
          response.data.map(obj => {
            return this.setState({
              userSpots: this.state.userSpots.concat(obj)
            });
          });
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
        <div className="container my-5">
          <h2>Your booked spots</h2>
          <table className="table table-hover border border-dark">
            <thead className="thead-dark">
              <tr>
                <th>Spot Selected</th>
                <th>Zone</th>
                <th>Vehicle type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userSpots.map(data => {
                return <TRow data={data} key={data.id} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default purchasedSpots;
