const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  // TODO: make it possible for users signing in with fb, linkedin or other to have appropriate key value pair
  googleId: String,
  name: {
    first: String,
    last: String
  },
  profile: {
    usernameName: String,
    age: String,
    city: String,
    gender: String,
    lookingFor: String,
    headline: String,
    selfSummary: String,
    embarrassingAdmition: String
  }
});

mongoose.model('users', userSchema);
