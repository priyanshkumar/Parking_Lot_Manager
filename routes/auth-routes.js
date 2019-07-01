const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  //handled by passport
});

router.get("/google", (req, res) => {
  //handled by passport
});

module.exports = router;
