const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const db = require("../models");
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findByPk(id).then(user => {
    done(null, user);
  });
});

//github oauth
passport.use(
  new GitHubStrategy(
    {
      callbackURL: "/auth/github/callback",
      clientID: process.env.github_clientID,
      clientSecret: process.env.github_clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

//google oauth
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/redirect",
      clientID: process.env.google_clientID,
      clientSecret: process.env.google_clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
