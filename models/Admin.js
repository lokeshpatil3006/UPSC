// admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  password: { type: String, required: true },
  role: { type: String, enum: ["superadmin", "admin"], default: "admin" },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: "Institute" },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
