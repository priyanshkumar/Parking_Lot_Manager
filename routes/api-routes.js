const db = require("../models");
const router = require("express").Router();
const Sequelize = require("sequelize");

router.post("/createProfile", (req, res) => {
  const userObj = req.body.user;
  const profileObj = req.body.profile;

  db.User.create({
    profileID: userObj.id,
    displayName: userObj.displayName,
    isAdmin: userObj.isAdmin,
    emailId: userObj.emailId
  })
    .then(newUser => {
      db.Customer.create({
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
        workPhoneNumber: profileObj.workPhoneNumber,
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
  if (req.user) {
    console.log(req.user);
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
    res.status(200).json("true");
  } else res.status(200).json("false");
});

module.exports = router;
