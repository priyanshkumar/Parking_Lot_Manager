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

router.get("/getUserSpots", authenticated, (req, res) => {
  db.Customer.findOne({
    where: {
      UserId: req.user.dataValues.id
    }
  })
    .then(response => {
      console.log(response);
      db.ParkingSpot.findAll({
        where: {
          CustomerId: response.dataValues.id,
          isSpotAllocated: true
        }
      })
        .then(result => {
          res.status(200).json(result);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
