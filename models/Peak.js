const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Peak Schema
const PeakSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  elevation: {
    type: Number,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
});

module.exports = Peak = mongoose.model("peak", PeakSchema);
