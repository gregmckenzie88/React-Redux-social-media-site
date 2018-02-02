const mongoose = require("mongoose");
const User = mongoose.model("users");
const faker = require('faker');

module.exports = async () => {
  // check if there are zero users
  const res = await User.find({});

  // if no users, fill users model with ten profiles
  const focuses = ['Director', 'Producer', 'Editor', 'Screenwriter', 'Actor', 'Art Director'];
  console.log('INIT')
  if(res.length === 0){

    for(var i = 0; i < 10; i++){
      console.log('loop start')
      // console.log('FILL WITH FAKE DATA');
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const focus = focuses[(Math.floor(Math.random() * focuses.length))];
      const fakeUser = new User({
        googleId: faker.internet.email(),
        name: {
          first: firstName,
          last: lastName
        },
        profile: {
          usernameName: `${firstName} ${lastName}`,
          city: faker.address.city(),
          description: 'This profile is for demontration Purposes only.  Feel free to send me a message!',
          primary: focus
        }
      });
      fakeUser.save();
      console.log('loop end');

    }
  }


}
