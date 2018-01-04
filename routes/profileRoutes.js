const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.get(
    "/api/search",
    //include requirelogin middlewear
    async (req, res) => {
      const users = await User.find({});

      //need pagination!!!

      res.send(users);
    }
  );

  app.get(
    "/api/profile/details",
    //include login middlewear
    async (req, res) => {
      const details = await User.findOne({ _id: req.query.id });

      //need pagination!!!

      res.send(details);
    }
  );

  app.post(
    "/api/profile",
    // include requireLogin middlewear
    async (req, res) => {
      const { firstName, lastName } = req.body;

      // console.log(req.user.id);

      //find current user from ID
      User.findByIdAndUpdate(req.user.id, {
        profile: {
          usernameName: req.body.usernameName,
          age: req.body.age,
          city: req.body.city,
          gender: req.body.gender,
          lookingFor: req.body.lookingFor,
          headline: req.body.headline,
          selfSummary: req.body.selfSummary,
          embarrassingAdmition: req.body.embarrassingAdmition
        }
      }).then(() => User.save());

      res.send(req.user);
    }
  );
};
