const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const db = require("../models");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findByPk(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "http://localhost:3001/auth/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //send user profile info to db
      console.log(profile);

      //check if user already exists in db
      db.User.findOne({ where: { profileID: profile.id } }).then(user => {
        if (user) {
          console.log("User already in db");
          done(null, user);
        } else {
          //create new user
          db.User.create({
            profileID: profile.id,
            displayName: profile.displayName
          }).then(newUser => {
            console.log(`New User Created`);
            console.log(newUser.dataValues);
            done(null, newUser);
          });
        }
      });
    }
  )
);
