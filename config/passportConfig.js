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
      db.User.findOne({ where: { profileID: profile._json.sub } }).then(
        user => {
          const data = profile._json;
          if (user) {
            done(null, user);
          } else {
            //create new user
            db.User.create({
              profileID: data.sub,
              emailId: data.email,
              displayName: data.name
            }).then(newUser => {
              done(null, newUser);
            });
          }
        }
      );
    }
  )
);

//facebook oauth
passport.use(
  new FacebookStrategy(
    {
      callbackURL:
        "https://parking-lot-manage.herokuapp.com/auth/facebook/redirect",
      clientID: process.env.facebook_AppID,
      clientSecret: process.env.facebook_AppSecret
    },
    (accessToken, refreshToken, profile, done) => {
      db.User.findOne({ where: { profileID: profile.id } }).then(user => {
        if (user) {
          done(null, user);
        } else {
          //create new user
          db.User.create({
            profileID: profile.id,
            emailId: "",
            displayName: ""
          }).then(newUser => {
            done(null, newUser);
          });
        }
      });
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
      db.User.findOne({ where: { profileID: profile.id } }).then(user => {
        if (user) {
          done(null, user);
        } else {
          //create new user
          db.User.create({
            profileID: profile.id,
            emailId: "",
            displayName: ""
          }).then(newUser => {
            done(null, newUser);
          });
        }
      });
    }
  )
);
