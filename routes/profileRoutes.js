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
      const { firstName, lastName, usernameName, city, description, equipment, unions, primary, additionalSkills, imdb, vimeo, youTube } = req.body;

      // console.log(req.user.id);

      //find current user from ID
      User.findByIdAndUpdate(req.user.id, {
        profile: {
          usernameName,
          city,
          description,
          primary,
          additionalSkills,
          equipment,
          unions,
          imdb,
          vimeo,
          youTube
        }
      }).then(() => User.save());

      res.send(req.user);
    }
  );
};
