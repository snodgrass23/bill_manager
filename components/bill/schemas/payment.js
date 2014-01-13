var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Payment = new mongoose.Schema({
    amount    : { type: Number },
    payed_at  : { type: Date, default: Date.now }
  }, {strict:true});

  // Plugins

  Payment.plugin(utils.plugin.timestamps);
  Payment.plugin(utils.plugin.extendedMethods);

  // Export

  return Payment;
};