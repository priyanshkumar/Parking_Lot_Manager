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
    //successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login"
  }),
  (req, res) => {
    console.log(req.user);
    //check if user
    db.User.findOne({ where: { profileID: req.user.id } }).then(user => {
      const data = req.user._json;
      if (user) {
        console.log("User already in db");
        res.redirect(`http://localhost:3000/dashboard/`);
      } else {
        db.User.create({
          profileID: data.sub,
          emailId: data.email,
          displayName: data.name
        }).then(user => {
          res.redirect(`http://localhost:3000/dashboard/`);
        });
      }
    });
  }
);

// GITHUB
router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    // successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login"
  }),
  (req, res) => {
    console.log(req.user);

    //find if user exists
    db.User.findOne({ where: { profileID: req.user.id } }).then(user => {
      const data = req.user._json;
      if (user) {
        console.log("User already in db");
        res.redirect(`http://localhost:3000/dashboard/`);
      } else {
        db.User.create({
          profileID: data.id,
          emailId: data.email,
          displayName: data.name
        }).then(user => {
          res.json(user);
          res.redirect(`http://localhost:3000/dashboard/`);
        });
      }
    });
  }
);

module.exports = router;
