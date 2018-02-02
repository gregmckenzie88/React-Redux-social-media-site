const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomId: String,
  lastUpdated: Number,
  messages: [
    {
      createdAt: Number,
      from: String,
      to: String,
      room: String,
      text: String
    }
  ]
});

mongoose.model('rooms', roomSchema);
