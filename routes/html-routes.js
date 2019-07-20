const path = require("path");
const router = require("express").Router();

router.get("http://localhost:3000/dashboard", (req, res) => {
  res.redirect("http://localhost:3000/dashboard");
  console.log(req.user);
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
