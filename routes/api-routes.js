const db = require("../models");
const router = require("express").Router();

router.post("/createProfile", (req, res) => {
  db.User.create({
    profileID: req.body.user.id,
    displayName: req.body.user.displayName,
    isAdmin: req.body.user.isAdmin,
    emailId: req.body.user.emailId
  })
    .then(newUser => {
      db.Customer.create({
        companyName: req.body.profile.companyName,
        companyPointOfContact: req.body.profile.companyPointOfContact,
        companyID: req.body.profile.companyID,
        streetNumber: req.body.profile.streetNumber,
        streetName: req.body.profile.streetName,
        city: req.body.profile.city,
        province: req.body.profile.province,
        zipcode: req.body.profile.zipcode,
        country: req.body.profile.country,
        faxNumber: req.body.profile.faxNumber,
        cellPhoneNumber: req.body.profile.cellPhoneNumber,
        workPhoneNumber: req.body.profile.workPhoneNumber,
        UserId: newUser.dataValues.id
      })
        .then(newProfile => {
          res.status(200).json(newProfile);
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
});

module.exports = router;
