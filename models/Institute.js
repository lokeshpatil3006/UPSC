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
});

const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
