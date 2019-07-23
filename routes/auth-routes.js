const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

//redirect is not logged on otherwise send to dashboard

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

// GOOGLE
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/redirect",
  passport.authenticate("google", {
    successRedirect: "/auth/profileCheck",
    failureRedirect: "http://localhost:3000/login"
  })
);

router.get("/profileCheck", (req, res) => {
  if (req.user) {
    db.Customer.findOne({ where: { UserId: req.user.dataValues.id } }).then(
      result => {
        if (result) {
          res.redirect("http://localhost:3000/");
        } else {
          res.redirect("http://localhost:3000/profileForm");
        }
      }
    );
  }
});

// FACEBOOK
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    failureRedirect: "http://localhost:3000/login"
  })
);

// TWITTER
router.get("/twitter", passport.authenticate("twitter"));

router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: "/auth/profileCheck",
    failureRedirect: "http://localhost:3000/login"
  })
);

router.get("/user", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  } else {
    res.json({
      success: false,
      message: "user is not authenticated"
    });
  }
});

module.exports = router;
