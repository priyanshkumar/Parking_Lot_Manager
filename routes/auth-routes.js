const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

//redirect is not logged on otherwise send to dashboard

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
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
    //successRedirect: "http://localhost:3000/form",
    failureRedirect: "http://localhost:3000/login"
  }),
  (req, res) => {
    console.log(req.user.id);
    //check if user
    db.User.findOne({ where: { profileID: req.user.id } }).then(user => {
      console.log(user);
      if (user) {
        console.log("User already in db");
        res.redirect("http://localhost:3000/dashboard");
      } else {
        res.redirect("http://localhost:3000/form");
        return req.user;
      }
    });
  }
);

// GITHUB
router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    // successRedirect: "http://localhost:3000/form",
    failureRedirect: "http://localhost:3000/login"
  }),
  (req, res) => {
    //res.send(console.log("checking" + req.profile));
    console.log(req.user);
    //find if user exists
    db.User.findOne({ where: { profileID: req.user.id } }).then(user => {
      if (user) {
        console.log("User already in db");
        res.redirect("http://localhost:3000/dashboard");
      } else {
        res.redirect("http://localhost:3000/form");
        return req.user;
      }
    });
  }
);

module.exports = router;
