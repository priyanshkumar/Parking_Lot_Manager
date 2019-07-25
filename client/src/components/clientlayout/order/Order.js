import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./order.css";

function Order() {
  return (
    <div>
      <Navbar />

      <div className="container my-5">
        <div className="ordercss p-4 rounded text-success">
          <i className="fas fa-info-circle" /> Your order has been placed! Our
          customer service will get in touch with you soon for your order
          confirmation.
        </div>
        <Link to="/dashboard">
          <p className="badge badge-success p-2 mt-2">
            {" "}
            <i class="far fa-check-circle" /> Back to dashboard
          </p>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Order;
