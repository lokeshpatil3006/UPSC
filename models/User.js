const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Student", "Instructor", "Institute", "Admin"],
    required: true,
  },
  contact: {},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
