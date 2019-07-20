import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../clientlayout/mainpage/MainPage";
import Login from "../clientlayout/login/Login";
import Signup from "../clientlayout/signup/Signup";
import Dashboard from "../clientlayout/dashboard/Dashboard";
import Terms from "../clientlayout/terms/Terms";
import Axios from "axios";

import "./App.css";
import ParkingApplication from "../clientlayout/forms/ParkingApplication";
import Customer from "../clientlayout/customer/customer";
import Payment from "../clientlayout/payment/Payment";

class App extends Component {
  state = {
    isAuthenticated: ""
  };

  componentDidMount() {
    Axios.get("/api/isAuthenticated").then(result => {
      result.data === "true"
        ? this.setState({ isAuthenticated: true })
        : this.setState({ isAuthenticated: false });
      console.log(this.state.authenticated);
    });
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/form" component={ParkingApplication} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/payment" component={Payment} />
      </Router>
    );
  }
}
export default App;
