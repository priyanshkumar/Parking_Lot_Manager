import React from "react";
import axios from "axios";
import "./profile.css";
import UserInfo from "./user-info/UserInfo";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

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
            <h3>
              My Profile{" "}
              <small>
                <i className="fas fa-chevron-down" />
              </small>
            </h3>

            <Link to="/profileform" className="btn btn-success py-2">
              <i className="fas fa-edit" /> Edit Profile
            </Link>
          </div>
          <UserInfo customerData={this.state.customerData} />
        </div>
      </div>
    );
  }
}
