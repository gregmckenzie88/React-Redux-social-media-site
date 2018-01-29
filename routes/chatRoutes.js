const mongoose = require("mongoose");
const Room = mongoose.model("rooms");
// const postMessage = require('../services/utils/postMessage');

module.exports = app => {
  app.get(
    "/api/room",
    //include requirelogin middlewear
    async (req, res) => {
      //return room messages
      const data = await Room.findOne({ roomId: req.query.room });

      //need pagination!!!

      res.send(data);
    }
  );

  app.post(
    "/api/room",
    //include requirelogin middlewear
    async (req, res) => {
      const { from, text, room, createdAt } = req.body;
      //return room messages
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


      //need pagination!!!

      res.send({});
    }
  );
};
