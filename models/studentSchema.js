const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    departureDate: {
      type: String,
      required: true,
    },
  },
  {
    reason: {
      type: String,
      required: true,
    },
  },
  {
    returnDate: {
      type: String,
      required: true,
    },
    idnumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
