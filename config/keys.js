// KEYS -- FIGURE OUT EWHICH SET OF CEDENTIALS TO USE
if(process.env.NODE_ENV === 'production'){
  // we are in prod, return prod keys
  module.exports = require('./prod.js');
} else {
  // in dev -- return dev keys!
  module.exports = require('./dev.js');
}
