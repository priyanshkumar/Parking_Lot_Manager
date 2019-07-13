const express = require("express");
const db = require("./models");
const passportConfig = require("./config/passportConfig");
const passport = require("passport");
const cookieSession = require("cookie-session");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//auth middleware
app.use(
  cookieSession({
    maxAge: 900000,
    keys: [process.env.cookie_keys]
  })
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync({ force: false, alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
