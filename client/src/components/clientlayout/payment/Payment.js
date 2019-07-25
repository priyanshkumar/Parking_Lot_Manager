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
      checkoutData: [],
      accepted: false,
      totalPrice: 0,
      termsTax: 0
    };
  }

  componentDidMount = () => {
    axios.get("/api/getProfile").then(response => {
      if (response.data.redirecturl === "login") {
        this.props.history.push("/login");
      } else {
        this.setState({ customerData: response.data });
      }
    });

    axios
      .get("/api/getCheckoutSpots")
      .then(response => {
        if (response.data.redirecturl === "login") {
          this.props.history.push("/login");
        } else {
          response.data.map(obj => {
            return this.setState({
              checkoutData: this.state.checkoutData.concat(obj),
              totalPrice: this.state.totalPrice + obj.spotPrice
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  purchaseSubmit = () => {
    axios
      .post("/api/purchaseSubmit", this.state.checkoutData)
      .then(response => {
        if (response.data.redirecturl === "login") {
          this.props.history.push("/login");
        } else if (response.data.redirecturl === "order") {
          this.props.history.push("/order");
        }
      });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container w-75 my-5">
          <div className="w-75">
            <h2>
              Payment Information{" "}
              <small>
                <i className="fas fa-chevron-down" />{" "}
              </small>
            </h2>
          </div>
          <UserInfo customerData={this.state.customerData} />

          <div className="container">
            <Price
              checkoutData={this.state.checkoutData}
              totalPrice={this.state.totalPrice}
            />

          </div>
          <Terms price={this.state.totalPrice} tax={this.state.termsTax} />
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
          <button
            className="btn btn-success"
            onClick={this.purchaseSubmit}
            disabled={this.state.accepted === false}
          >
            Confirm Purchase
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Payment;
