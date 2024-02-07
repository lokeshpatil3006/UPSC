// admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  institute: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
    },
  ],
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
