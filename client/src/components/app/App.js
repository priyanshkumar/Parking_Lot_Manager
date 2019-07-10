import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../clientlayout/mainpage/MainPage";
import Login from "../clientlayout/login/Login";
import Signup from "../clientlayout/signup/Signup";
import Dashboard from "../clientlayout/dashboard/Dashboard";

import "./App.css";
import ParkingApplication from "../clientlayout/forms/ParkingApplication";
import Customer from "../clientlayout/customer/customer";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/form" component={ParkingApplication} />
        <Route exact path="/customer" component={Customer} />
      </Router>
    );
  }
}
export default App;
