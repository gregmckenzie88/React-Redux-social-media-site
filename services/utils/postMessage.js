const mongoose = require("mongoose");
const Room = mongoose.model("rooms");

const postMessage = async (from, text, room, createdAt) => {

  //POST HERE

  const existingRoom = await Room.findOne({roomId: room});
  if(!existingRoom){
    // ROOM DOES NOT EXIST -- MAKE ONE
    const newRoom = new Room({
      roomId: room,
      messages: [
        {
          createdAt,
          from,
          room,
          text
        }
      ]
    });
    newRoom.save();
  } else {
    //  ROOM EXISTS -- UPDATE
    Room.findOneAndUpdate({roomId: room}, {

      $push: { messages: {
        createdAt,
        from,
        room,
        text
      }}

    }).then(() => Room.save());
  }


}


module.exports = { postMessage };
