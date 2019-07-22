import React from "react";
import axios from "axios";
import "./profile.css";
import Navbar from "../navbar/Navbar";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: {}
    };
    this.reloadRefresh();
  }

  reloadRefresh = () => {
    axios.get("/api/getProfile").then(response => {
      if (response.data.redirecturl === "login") {
        this.props.history.push("/login");
      } else {
        this.setState({ customerData: response.data });
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container my-5">
          <div className="mb-4 d-flex justify-content-between">
            <h3>My Profile</h3>
            <a href="/profileform" className="btn btn-primary">
              Edit
            </a>
          </div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Company Name</th>
                <td>{this.state.customerData.companyName}</td>
              </tr>
              <tr>
                <th>Manager Name</th>
                <td>{this.state.customerData.companyPointOfContact}</td>
              </tr>
              <tr>
                <th>Company ID</th>
                <td>{this.state.customerData.companyID}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  {this.state.customerData.streetNumber},
                  {this.state.customerData.streetName}
                </td>
              </tr>
              <tr>
                <th>City, ZipCode</th>
                <td>
                  {this.state.customerData.city},
                  {this.state.customerData.zipcode}
                </td>
              </tr>
              <tr>
                <th>Province, Country</th>
                <td>
                  {this.state.customerData.province},
                  {this.state.customerData.country}
                </td>
              </tr>
              <tr>
                <th>Fax Number</th>
                <td>{this.state.customerData.faxNumber}</td>
              </tr>
              <tr>
                <th>Cell Phone Number</th>
                <td>{this.state.customerData.cellPhoneNumber}</td>
              </tr>
              <tr>
                <th>Work Phone Number</th>
                <td>{this.state.customerData.workPhoneNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
