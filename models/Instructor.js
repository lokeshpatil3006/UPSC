const mongoose = require("mongoose");
const User = require("./User");
const instructorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  documents: {
    type: [String],
    default: [],
  },
  assignedPapers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnswerSheet",
    },
  ], // Papers assigned to the instructor
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  instructorAt: {
    type: "String",
  },
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
