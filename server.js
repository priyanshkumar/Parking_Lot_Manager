const express = require("express");
const db = require("./models");
const passportConfig = require("./config/passportConfig");
const passport = require("passport");
const cookieSession = require("cookie-session");
const routes = require("./routes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//auth middleware
app.use(
  cookieSession({
    name: "session",
    maxAge: 15 * 60 * 1000,
    keys: [process.env.cookie_keys]
  })
);

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://parking-lot-manage.herokuapp.com", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
