const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  //handled by passport
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get(
  "http://localhost:3001/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    console.log("at callback screen");
  }
);

module.exports = router;
