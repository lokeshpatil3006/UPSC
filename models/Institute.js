const mongoose = require("mongoose");
const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  faculties: [
    {
      type: String,
    },
  ],
  pendingInstructors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
    },
  ],
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
