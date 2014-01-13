module.exports = function() {

  var models = {
    bill: mongoose.model('Bill', require('./schemas/bill')),
    payment: mongoose.model('Payment', require('./schemas/payment'))
  };

};