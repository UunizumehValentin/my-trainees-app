const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  indexNo: {
    type: Number,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Number,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentsSchema);
module.exports = Student;
