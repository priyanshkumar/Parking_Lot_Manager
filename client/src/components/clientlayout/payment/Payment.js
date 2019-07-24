import React, { Fragment } from "react";
import Price from "./price/Price";
import Navbar from "../navbar/Navbar";
import UserInfo from "../profile/user-info/UserInfo";
import Terms from "./terms/Terms";
import axios from "axios";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: {},
      accepted: false,
      termsPrice: 0,
      termsTax: 0
    };
    this.reloadRefresh();
  }

  reloadRefresh = () => {
    axios.get("/api/getProfile").then(response => {
      if (response.data.redirecturl === "login") {
        this.props.history.push("/login");
      } else {
        axios
          .get("/api/getcheckoutspots")
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
        this.setState({ customerData: response.data });
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container my-5">
          <div className="">
            <h2>Payment Information</h2>
          </div>
          <UserInfo customerData={this.state.customerData} />
          <div className="container">
            <Price />
          </div>
          <Terms price={this.state.termsPrice} tax={this.state.termsTax} />
          <div className="form-check" id="termsCheck">
            <input
              className="form-check-input"
              type="checkbox"
              id="termsCheckBox"
              onChange={e => {
                this.setState({ accepted: e.target.checked });
              }}
            />
            <label className="form-check-label" htmlFor="termsCheckBox">
              Accept Terms and Conditions
            </label>
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-success"
            onClick={this.props.handleSubmit}
            disabled={this.state.accepted === false}
            value="Confirm Checkout"
          />
        </div>
      </Fragment>
    );
  }
}

export default Payment;
