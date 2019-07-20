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
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login"
  })
);

// GITHUB
router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login"
  }),
  (req, res) => {
    //find if user exists
    db.User.findOne({ where: { profileID: req.user.id } }).then(user => {
      const data = req.user._json;
      if (user) {
        console.log("User already in db");
        console.log(user);
        res.json(user);
        res.redirect("http://localhost:3000/dashboard");
      } else {
        db.User.create({
          profileID: data.id,
          emailId: data.email,
          displayName: data.login
        }).then(user => {
          console.log(user);
          res.json(user);
        });
      }
    });
  }
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
