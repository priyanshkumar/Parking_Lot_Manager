const db = require("../models");
const router = require("express").Router();
const Sequelize = require("sequelize");

const authenticated = require("../config/middelware/isAuthenticated");

router.post("/createProfile", authenticated, (req, res) => {
  db.Customer.findOne({ where: { UserId: req.user.dataValues.id } }).then(
    response => {
      if (response) {
        db.Customer.update(
          {
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
            workPhoneNumber: req.body.workPhoneNumber
          },
          {
            where: {
              UserId: req.user.dataValues.id
            }
          }
        )
          .then(result => {
            if (result) {
              res.status(200).json({
                redirecturl: "dashboard"
              });
            }
          })
          .catch(error => {
            res.status(200).json({ error });
          });
      } else {
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
            res.status(200).json({ error });
          });
      }
    }
  );
});

router.get("/getProfile", authenticated, (req, res) => {
  db.Customer.findOne({
    where: { UserId: req.user.dataValues.id },
    raw: true
  })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/getParkingSpots", authenticated, (req, res) => {
  db.ParkingSpot.findAll()
    .then(parkingSpots => {
      res.status(200).json(parkingSpots);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/getCheckoutSpots", authenticated, (req, res) => {
  db.Customer.findOne({
    where: { UserId: req.user.dataValues.id }
  })
    .then(response => {
      db.ParkingSpot.findAll({
        where: {
          CustomerId: response.dataValues.id,
          isCheckout: true
        }
      })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          res.status(500).json(error);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/checkout", authenticated, (req, res) => {
  spotsBulk = req.body.map(spot => {
    return spot.spot;
  });
  db.Customer.findOne({
    where: { UserId: req.user.dataValues.id }
  })
    .then(response => {
      const Op = Sequelize.Op;
      db.ParkingSpot.update(
        {
          isCheckout: true,
          CustomerId: response.dataValues.id
        },
        {
          where: {
            spotName: {
              [Op.in]: spotsBulk
            }
          }
        }
      )
        .then(updatedSpots => {
          if (updatedSpots) {
            res.status(200).json({ redirecturl: "payment" });
          } else {
            res.status(200).json({ redirecturl: "dashboard" });
          }
        })
        .catch(error => {
          res.status(500).json(error);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/isAuthenticated", (req, res) => {
  if (req.user) {
    res.status(200).json(true);
  } else res.status(200).json(false);
});

router.post("/purchaseSubmit", authenticated, (req, res) => {
  updateData = req.body.map(data => {
    return data.id;
  });

  const Op = Sequelize.Op;
  db.ParkingSpot.update(
    {
      isSpotAllocated: true,
      isCheckout: false
    },
    {
      where: {
        id: {
          [Op.in]: updateData
        }
      }
    }
  )
    .then(() => {
      res.status(200).json({ redirecturl: "order" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
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
