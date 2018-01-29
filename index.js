const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const http = require('http');
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require("./config/keys");

require("./models/User.js");
require("./models/Chatroom.js");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

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
require("./routes/profileRoutes.js")(app);
require("./routes/chatRoutes.js")(app);

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

var server = http.createServer(app);


require('./services/sockets.js')(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT);
