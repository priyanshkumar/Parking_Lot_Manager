import React, { Fragment } from "react";
import Price from "./price/Price";
import Navbar from "../navbar/Navbar";

class Payment extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Price />
        </div>
      </Fragment>
    );
  }
}

export default Payment;
