const path = require("path");
const router = require("express").Router();

const ensureAuthenticated = (req, res, next) => {
  if (!req.user) {
    //if user not logged in
    res.redirect("/login");
  } else {
    next();
  }
};

router.get(
  "http://localhost:3000/dashboard",
  ensureAuthenticated,
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
    console.log(req.user);
  }
);

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
