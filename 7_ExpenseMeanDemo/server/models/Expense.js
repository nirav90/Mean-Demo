var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  Description: String,
  dateOfExpense: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Exlpense', UserSchema);