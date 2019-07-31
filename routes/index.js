const router = require("express").Router();
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api-routes");
const authRoutes = require("./auth-routes");

//added here to ensure api routes are protected
const ensureAuthenticated = (req, res, next) => {
  if (!req.user) {
    //if user not logged in
    res.redirect("/login");
  } else {
    next();
  }
};

router.use("/auth", authRoutes);
router.use("/api", ensureAuthenticated, apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
