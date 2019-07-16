const db = require("../models");
const router = require("express").Router();

router.post("/createProfile", (req, res) => {
  db.User.create({
    profileID: req.user.id,
    displayName: req.user.displayName,
    emailId: req.user.email
  })
    .then(newuser => {
      console.log(newuser);
      res.json(results);
      db.Customer.create(req.body)
        .then(results => {
          res.json(results);
        })
        .catch(error => {
          res.status(500).json(error);
        });
      res.redirect("http://localhost:3000/dashboard");
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/api/getProfile/:userId", (req, res) => {
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

router.get("/api/getParkingSpots", (req, res) => {
  db.ParkingSpot.findAll({
    include: [db.Customer]
  })
    .then(parkingSpots => {
      res.status(200).json(parkingSpots);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
