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
    }); */
      console.log(profile);
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
      //check if user exists
      db.User.findOne({ where: { profileID: profile._json.sub } }).then(
        user => {
          const data = profile._json;
          if (user) {
            console.log("User already in db");
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
