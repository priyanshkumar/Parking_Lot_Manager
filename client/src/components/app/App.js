import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../clientlayout/mainpage/MainPage";
import Login from "../clientlayout/login/Login";
import Signup from "../clientlayout/signup/Signup";
import Dashboard from "../clientlayout/dashboard/Dashboard";
// import Axios from "axios";
import Order from '../clientlayout/order/Order'
import "./App.css";
import ProfileForm from "../clientlayout/profileForm/ProfileForm";
import Profile from "../clientlayout/profile/profile";
import Payment from "../clientlayout/payment/Payment";

class App extends Component {
  state = {
    isAuthenticated: ""
  };

  // componentDidMount() {
  //   Axios.get("/api/isAuthenticated").then(result => {
  //     this.setState({ isAuthenticated: result.data });
  //     console.log(this.state.isAuthenticated);
  //   });
  // }

  render() {
    //   if (this.state.isAuthenticated) {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profileform" component={ProfileForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/order" component={Order} />

        {/* </Router>
      );
    } else {
      return (
        <Router> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Router>
    );
  }
  // }
}
export default App;
