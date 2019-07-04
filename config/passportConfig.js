const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "341267096007-6c3glni5c2jqm74evh212ol42vnh2arq.apps.googleusercontent.com",
      clientSecret: "Vsx2iKcR-1K8feLp5q2juILz",
      callbackURL: "auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //send user profile info to db
      console.log(profile);
    }
  )
);
