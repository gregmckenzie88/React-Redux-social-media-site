// const moment = require('moment');

var generateMessage = (from, to, text, room, createdAt) => {
  // const createdAt = moment().valueOf();
  return {
    from,
    to,
    text,
    room,
    createdAt
  };
};

module.exports = { generateMessage };
