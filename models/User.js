const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   username: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   dateJoined: {
      type: Date,
      default: Date.now
   },
   totalPeaks: {
      type: Number,
      default: 0
   },
   peakList: []
});

module.exports = User = mongoose.model("user", UserSchema);
