const Student = require("../models/studentsSchema");

//adding new students

const createStudents = async (req, res) => {
  const newStudents = new Student({
    name: req.body.name,
    year: req.body.year,
    indexNo: req.body.indexNo,
    destination: req.body.destination,
    reason: req.body.reason,
    departureDate: req.body.departureDate,
    returnDate: req.body.returnDate,
    status: req.body.status,
  });

  await newStudents.save();
  res.status(201).json(newStudents);
};

//get all students
const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

//get a student
const getSingleStudent = async (req, res) => {
  const students = await Student.findById(req.params._id);
  res.json(students);
};

//get student by Id
const updateStudent = async (req, res) => {
  const foundStudent = await Student.findById(req.params._id);
  if (foundStudent) {
    (foundStudent.name = req.body.name ? req.body.name : foundStudent.name),
      (foundStudent.year = req.body.year ? req.body.year : foundStudent.year),
      (foundStudent.indexNo = req.body.indexNo
        ? req.body.indexNo
        : foundStudent.indexNo),
      (foundStudent.destination = req.body.destination
        ? req.body.destination
        : foundStudent.destination),
      (foundStudent.reason = req.body.reason
        ? req.body.reason
        : foundStudent.reason),
      (foundStudent.departureDate = req.body.departureDate
        ? req.body.departureDate
        : foundStudent.departureDate),
      (foundStudent.returnDate = req.body.returnDate
        ? req.body.returnDate
        : foundStudent.returnDate),
      (foundStudent.status = req.body.status
        ? req.body.status
        : foundStudent.status);

    const updatedStudent = await foundStudent.save();
    res.json({ updatedStudent });
  }
};

//delete a student
const deleteStudent = async (req, res) => {
  const foundStudent = await Student.findById(req.params._id);
  if (foundStudent) {
    foundStudent.remove();
    res.json({ message: `${foundStudent.name} removed` });
  } else {
    res.status(404).json({ error: `Student not found` });
  }
};

module.exports = {
  createStudents,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
