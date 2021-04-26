const Student = require("../models/studentSchema");

// adding student
const createStudent = async (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    destination: req.body.destination,
    email: req.body.email,
    dob: req.body.dob,
  });
  await newStudent.save();
  res.status(201).json(newStudent);
};

// get all students
const getAllStudents = async (req, res) => {
  const students = await student.find();
  res.json(students);
};

// get a student
const getSingleStudent = async (req, res) => {
  const student = await Student.findById(req.params._id);
  res.json(student);
};

// update a student
const updateStudent = async (req, res) => {
  const foundStudent = await Student.findById(req.params._id);
  if (foundStudent) {
    (foundStudent.name = req.body.name),
      (foundStudent.destination = req.body.destination),
      (foundStudent.email = req.body.email),
      (foundStudent.dob = req.body.dob);

    const updatedStudent = await foundStudent.save();
    res.json({ updatedStudent });
  }
};

// delete a student
const deleteStudent = async (req, res) => {
  const foundStudent = await Student.findById(req.params._id);
  if (foundStudent) {
    foundStudent.remove();
    res.json({ msg: `${foundStudent.name} remove` });
  } else {
    res.status(404).json({ error: "Student notfound" });
  }
};
module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
