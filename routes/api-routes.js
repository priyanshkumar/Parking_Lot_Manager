const db = require("../models");
const router = require("express").Router();
const Sequelize = require("sequelize");

router.post("/createProfile", (req, res) => {
  if (req.user) {
    console.log(req.user);
    db.Customer.create({
      companyName: req.body.companyName,
      companyPointOfContact: req.body.companyPointOfContact,
      companyID: req.body.companyID,
      streetNumber: req.body.streetNumber,
      streetName: req.body.streetName,
      city: req.body.city,
      province: req.body.province,
      zipcode: req.body.zipcode,
      country: req.body.country,
      faxNumber: req.body.faxNumber,
      cellPhoneNumber: req.body.cellPhoneNumber,
      workPhoneNumber: req.body.workPhoneNumber,
      UserId: req.user.dataValues.id
    })
      .then(result => {
        if (result) {
          res.status(200).json({
            redirecturl: "dashboard"
          });
        }
      })
      .catch(error => {
        res.status(200).json({error
        });
      });
  } else {
    // console.log("hello");
    // window.location("http://localhost:3000/login");
    res.status(200).json({
      redirecturl: "login"
    });
  }
});

router.get("/getProfile/:userId", (req, res) => {
  db.Customer.findOne({
    where: { UserId: req.params.userId },
    raw: true
  })
    .then(profileResults => {
      db.ParkingSpot.findAll({
        where: { CustomerId: profileResults.id },
        raw: true
      })
        .then(parkingSpots => {
          profileResults.parkingSpots = parkingSpots;
          res.status(200).json(profileResults);
        })
        .catch(error => {
          res.status(500).json(error);
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/getParkingSpots", (req, res) => {
  if (req.user) {
    db.ParkingSpot.findAll({
      include: [db.Customer],
      raw: true
    })
      .then(parkingSpots => {
        res.status(200).json(parkingSpots);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  }
});

router.put("/updateProfile/:userId", (req, res) => {
  const profileObj = req.body;

  db.Customer.update(
    {
      companyName: profileObj.companyName,
      companyPointOfContact: profileObj.companyPointOfContact,
      companyID: profileObj.companyID,
      streetNumber: profileObj.streetNumber,
      streetName: profileObj.streetName,
      city: profileObj.city,
      province: profileObj.province,
      zipcode: profileObj.zipcode,
      country: profileObj.country,
      faxNumber: profileObj.faxNumber,
      cellPhoneNumber: profileObj.cellPhoneNumber,
      workPhoneNumber: profileObj.workPhoneNumber
    },
    {
      where: {
        UserId: req.params.userId
      }
    }
  )
    .then(updatedProfile => {
      res.status(200).json(updatedProfile);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/allocateParkingSpots", (req, res) => {
  const Op = Sequelize.Op;
  db.ParkingSpot.update(
    {
      isSpotAllocated: true,
      CustomerId: req.body.CustomerId
    },
    {
      where: {
        id: {
          [Op.in]: req.body.spotId
        }
      }
    }
  )
    .then(updatedSpots => {
      res.status(200).json(updatedSpots);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/isAuthenticated", (req, res) => {
  if (req.user) {
    res.status(200).json(true);
  } else res.status(200).json(false);
});

module.exports = router;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import MainPage from "../clientlayout/mainpage/MainPage";
// import Login from "../clientlayout/login/Login";
// import Signup from "../clientlayout/signup/Signup";
// import Dashboard from "../clientlayout/dashboard/Dashboard";
// import Terms from "../clientlayout/terms/Terms";
// import Axios from "axios";
// import "./App.css";
// import ParkingApplication from "../clientlayout/forms/ParkingApplication";
// import Customer from "../clientlayout/customer/customer";
// import Payment from "../clientlayout/payment/Payment";

// // const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
// //   <Route
// //     {...rest}
// //     render={() =>
// //       isAuthenticated === true ? <Component /> : <Redirect to="/" />
// //     }
// //   />
// // );

// class App extends Component {
//   state = {
//     isAuthenticated: false
//   };

//   componentDidMount() {
//     Axios.get("/api/isAuthenticated")
//       .then(result => {
//         console.log(result.data);
//         this.setState({ isAuthenticated: true });
//       })
//       .then(() => {
//         console.log(this.state.isAuthenticated);
//       });
//       console.log(this.state.isAuthenticated);
//   }

//   render() {
//     return (
//       <Router>
//         {/* <PrivateRoute
//           exact
//           path="/dashboard"
//           isAuthenticated={this.state.isAuthenticated}
//           component={Dashboard}
//         />
//         <PrivateRoute exact path="/form" component={ParkingApplication} />
//         <PrivateRoute exact path="/customer" component={Customer} />
//         <PrivateRoute exact path="/terms" component={Terms} />
//         <PrivateRoute exact path="/payment" component={Payment} /> */}
//         <Route exact path="/" component={MainPage} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/login" component={Login} />
//       </Router>
//     );
//   }
// }
// export default App;
