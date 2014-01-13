var utils = require('mongoose-utils'),
    mongoose = require('mongoose');

module.exports = function() {

  var Bill = new mongoose.Schema({
    owner           : { type: User },
    name            : { type: String, trim: true, required: true },
    payment_amount  : { type: Number },
    balance         : { type: Number },
    notes           : { type: String, trim: true },
    payments        : [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
    due_at          : { type: Date, default: Date.now }
  }, {strict:true});

  // Plugins

  Bill.plugin(utils.plugin.timestamps);
  Bill.plugin(utils.plugin.extendedMethods);

  // Export

  return Bill;

};