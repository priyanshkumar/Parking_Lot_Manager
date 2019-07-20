const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
//const GitHubStrategy = require("passport-github").Strategy; need to remove
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
/* passport.use(
  new GitHubStrategy(
    {
      callbackURL: "/auth/github/callback",
      clientID: process.env.github_clientID,
      clientSecret: process.env.github_clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user
      /*  db.User.findOne({ where: { profileID: req.user.id } }).then(user => {
      const data = req.user._json;
      if (user) {
        console.log("User already in db");
        done(null,user)
       
      } else {
        db.User.create({
          profileID: data.sub,
          emailId: data.email,
          displayName: data.name
        }).then(newUser => {
         done(null,newUser)
        });
      }
    }); 
      console.log(profile);
    }
  )
); */

//google oauth
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/redirect",
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
      callbackURL: "/auth/facebook/callback",
      clientID: process.env.facebook_clientID,
      clientSecret: process.env.facebook_clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //add db methods here
      console.log(profile);
      done(null, user);
    }
  )
);

//twitter oath
passport.use(
  new TwitterStrategy(
    {
      callbackURL: "/auth/twitter/callback",
      clientID: process.env.twitter_clientID,
      clientSecret: process.env.twitter_clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //add db methods here
      console.log(profile);
      done(null, user);
    }
  )
);
