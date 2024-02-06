const mongoose = require("mongoose");
const answerSheetSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subject: {
    type: String,
    trim: true,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  checkedAt: {
    type: Date,
  },
});
const AnswerSheet = mongoose.model("AnswerSheet", answerSheetSchema);

module.exports = AnswerSheet;
