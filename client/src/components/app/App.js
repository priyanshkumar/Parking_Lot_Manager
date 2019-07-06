import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../clientlayout/mainpage/MainPage";
import Login from "../clientlayout/login/Login";
import Signup from "../clientlayout/signup/Signup";
import Dashboard from "../clientlayout/dashboard/Dashboard";
import Navbar from "../clientlayout/navbar/Navbar";

import "./App.css";
import ParkingApplication from "../clientlayout/forms/ParkingApplication";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/form" component={ParkingApplication} />
      </Router>
    );
  }
}
export default App;
