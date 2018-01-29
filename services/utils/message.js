// const moment = require('moment');

var generateMessage = (from, text, room, createdAt) => {
  // const createdAt = moment().valueOf();
  return {
    from,
    text,
    room,
    createdAt
  };
};

module.exports = { generateMessage };
