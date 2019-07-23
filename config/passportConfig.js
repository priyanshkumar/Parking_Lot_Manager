const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
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

//google oauth
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.google_clientID,
      clientSecret: process.env.google_clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user exists
      db.User.findOne({ where: { profileID: profile.id } }).then(user => {
        console.log(profile);
        const data = profile._json;

        if (!user) {
          //create new user
          return db.User.create({
            profileID: data.sub,
            emailId: data.email,
            displayName: data.name,
            isAdmin: false
          }).then(newUser => {
            done(null, newUser);
          });
        }
        console.log("User already in db");
        return done(null, user);
      });
    }
  )
);

//facebook oauth
passport.use(
  new FacebookStrategy(
    {
      callbackURL: "/auth/facebook/redirect",
      clientID: process.env.facebook_AppID,
      clientSecret: process.env.facebook_AppSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //add db methods here
      console.log(profile);
      return done(null, profile);
    }
  )
);

//twitter oath
passport.use(
  new TwitterStrategy(
    {
      callbackURL: "/auth/twitter/redirect",
      consumerKey: process.env.twitter_ConsumerKey,
      consumerSecret: process.env.twitter_ConsumerSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //add db methods here
      console.log(profile);
      done(null, profile);
    }
  )
);
