var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  gender: String,
  phoneNo: String,
  country: String,
  age: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);