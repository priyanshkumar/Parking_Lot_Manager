import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../layouts/MainPage";
import Login from "../layouts/Login";
import Signup from "../layouts/Signup";
import Dashboard from "../layouts/Dashboard";
import Navbar from "../layouts/Navbar";

import "./App.css";
import ParkingApplication from "../Forms/ParkingApplication";

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
