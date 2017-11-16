const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User.js");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const app = express();

////////////////////////////////
/// CONFIGURE COOKIE SESSION ///
////////////////////////////////

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//////////////////
/// ALL ROUTES ///
//////////////////

require("./routes/authRoutes.js")(app);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

///////////////////
/// PORT LISTEN ///
///////////////////

const PORT = process.env.PORT || 5000;
app.listen(PORT);
