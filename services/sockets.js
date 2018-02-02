const socketIO = require('socket.io');
const { generateMessage } = require('./utils/message');
const moment = require('moment');

module.exports = server => {
  var io = socketIO(server);

  io.on('connection', socket => {

    socket.on('join', (room) => {
      socket.join(room);
    });

    // HANDLE MESSAGES
    socket.on('createMessage', (message, callback) => {
      const createdAt = moment().valueOf();
      const { from, to, text, room } = message;
      io.to(message.room).emit('newMessage', generateMessage(from, to, text, room, createdAt));
      callback({ from, to, text, room, createdAt });
    });

  });
};
