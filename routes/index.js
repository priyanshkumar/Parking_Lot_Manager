const router = require("express").Router();
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api-routes");
const authRoutes = require("./auth-routes");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

module.exports = router;
