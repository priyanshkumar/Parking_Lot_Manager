const db = require("../models");

module.exports = app => {
  app.post("/api/createProfile", (req, res) => {
    db.Customer.create(req.body)
      .then(results => {
        res.json(results);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  app.get("/api/getProfile/:userId", (req, res) => {
    db.Customer.findOne({
      where: { UserId: req.params.userId },
      include: [db.ParkingSpot]
    })
      .then(profileResults => {
        res.status(200).json(profileResults);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });

  app.get("/api/getParkingSpots", (req, res) => {
    db.ParkingSpot.findAll({
      include: [db.Customer]
    })
      .then(parkingSpots => {
        res.status(200).json(parkingSpots);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
};
