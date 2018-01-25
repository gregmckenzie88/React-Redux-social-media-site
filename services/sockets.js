const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

module.exports = server => {
  var io = socketIO(server);

  io.on('connection', socket => {
    console.log('user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));

    // INCOMING FROM CLIENT
    socket.on('createMessage', (message, callback) => {
      console.log('createMessage', message);
      io.emit('newMessage', generateMessage(message.from, message.text));
      callback('This is from the server!');
    });



    //OUTGOING TO CLIENT


    socket.on('disconnect', () => console.log('user disconnected'))
  });
}
