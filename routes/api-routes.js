const db = require("../models");
const router = require("express").Router();

router.post("/createProfile", (req, res) => {
  db.User.create({
    profileID: req.user.id,
    displayName: req.user.displayName
  }).then(newuser => {
    console.log(newuser);
  });

  db.Customer.create(req.body)
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/getProfile/:userId", (req, res) => {
  db.Customer.findOne({ where: { userId: req.params.userId } })
    .then(profileResults => {
      res.status(200).json(profileResults);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/getParkingSpots", (req, res) => {
  db.ParkingSpot.findAll({})
    .then(parkingSpots => {
      res.status(200).json(parkingSpots);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
