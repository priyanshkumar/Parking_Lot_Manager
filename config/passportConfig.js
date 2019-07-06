const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "http://localhost:3000/dashboard",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //send user profile info to db
      console.log(profile);
    }
  )
);
