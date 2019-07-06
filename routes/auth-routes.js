const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  //handled by passport
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/redirect", passport.authenticate("google"), (req, res) => {
  /* res.send(req.user); */
  res.redirect("http://localhost:3000/dashboard");
  console.log(req.user.dataValues);
});

module.exports = router;
