const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
// const protect = require("../middlewares/authMiddleware");

router.route("/").post(createStudent).get(getAllStudents);
router
  .route("/:_id")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
