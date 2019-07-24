const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

// logout user
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// GOOGLE
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/auth/profileCheck",
    failureRedirect: "/login"
  })
);

// FACEBOOK
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    successRedirect: "/auth/profileCheck",
    failureRedirect: "/login"
  })
);

// TWITTER
router.get("/twitter", passport.authenticate("twitter"));

router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: "/auth/profileCheck",
    failureRedirect: "/login"
  })
);

// used to acquire user object
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

router.get("/profileCheck", (req, res) => {
  if (req.user) {
    db.Customer.findOne({ where: { UserId: req.user.dataValues.id } }).then(
      result => {
        if (result) {
          res.redirect("/");
        } else {
          res.redirect("/profileForm");
        }
      }
    );
  }
});

module.exports = router;
