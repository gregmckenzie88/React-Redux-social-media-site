const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomId: String,
  messages: [
    {
      createdAt: Number,
      from: String,
      room: String,
      text: String
    }
  ]
});

mongoose.model('rooms', roomSchema);
