const passport = require("passport");

module.exports = app => {

  ///////////////////////////
  /// SIGN IN WITH GOOGLE ///
  ///////////////////////////

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  ////////////////////////
  /// GET CURRENT USER ///
  ////////////////////////

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  ///////////////////
  /// USER LOGOUT ///
  ///////////////////

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })
};
