import React from "react";
import axios from "axios";
import "./customer.css";
export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: {}
    };
  }
  render() {
    axios
      .get("/api/getProfile/2")
      .then(response => {
        console.log(response);
        this.setState({ customerData: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    return (
      <div>
        <h3>Company Profile</h3>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th />
              <td />
            </tr>
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
              <td>{this.state.customerData.companyId}</td>
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
                {this.state.customerData.city},{this.state.customerData.zipcode}
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
    );
  }
}
