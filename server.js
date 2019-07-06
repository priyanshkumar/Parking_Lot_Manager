const express = require("express");
const db = require("./models");
const passportConfig = require("./config/passportConfig");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);
//auth routes
const authRoutes = require("./routes/auth-routes");
app.use("/auth/", authRoutes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
