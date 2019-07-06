const db = require("../models");

module.exports = app => {
  app.post("/api/createCustomer", (req, res) => {
    console.log("Inside Create Customer post method");
    db.Customer.create(req.body)
      .then(results => {
        res.json(results);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  app.get("/api/getParkingSpots", (req, res) => {
    console.log("Inside get route for parking spots");
    db.ParkingSpot.findAll({})
      .then(parkingSpots => {
        res.status(200).json(parkingSpots);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
};
