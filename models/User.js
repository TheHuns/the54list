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
  peakList: {
    type: Array
  }
});

// // authenticate input against database documents
// UserSchema.statics.authenticate = function(email, password, callback) {
//    User.findOne({ email: email }).exec(function(error, user) {
//       if (error) {
//          return callback(error);
//       } else if (!user) {
//          var err = new Error("User not found.");
//          err.status = 401;
//          return callback(err);
//       }
//       bcrypt.compare(password, user.password, function(error, result) {
//          if (result === true) {
//             return callback(null, user);
//          } else {
//             return callback();
//          }
//       });
//    });
// };

module.exports = User = mongoose.model("user", UserSchema);
