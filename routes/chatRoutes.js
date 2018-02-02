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



  app.get(
    "/api/new-messages",
    //include requirelogin middlewear
    async (req, res) => {

      const roomHalf = new RegExp(req.query.userId, 'i');

      const data = await Room.find({
        roomId: roomHalf
      })
      .limit(5)
      .sort({ lastUpdated: -1 })
      .slice('messages', -1)

      //need pagination!!!

      res.send(data);
    }
  );

  app.post(
    "/api/room",
    //include requirelogin middlewear
    async (req, res) => {
      const { from, to, text, room, createdAt } = req.body;
      //return room messages
      const existingRoom = await Room.findOne({roomId: room});
      if(!existingRoom){
        // ROOM DOES NOT EXIST -- MAKE ONE
        const newRoom = new Room({
          roomId: room,
          lastUpdated: createdAt,
          messages: [
            {
              createdAt,
              from,
              to,
              room,
              text
            }
          ]
        });
        newRoom.save();
      } else {
        //  ROOM EXISTS -- UPDATE
        Room.findOneAndUpdate({roomId: room}, {
          lastUpdated: createdAt,
          $push: { messages: {
            createdAt,
            from,
            to,
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
