const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

const User = mongoose.model("users");

////////////////////////////
/// CREATE SESSION TOKEN ///
////////////////////////////

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

///////////////////////
/// GOOGLE STRATEGY ///
///////////////////////

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("access token: ", accessToken);
      // console.log("refresh token: ", refreshToken);
      // console.log("profile: ", profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //we already have a user instance for them
        done(null, existingUser);
      } else {
        //create a user instance for them
        const user = await new User({
          googleId: profile.id,
          name: {
            first: profile.name.givenName,
            last: profile.name.familyName
          }
        }).save();
        done(null, user);
      }
    }
  )
);
