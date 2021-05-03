const express=require("express")
const router=express.Router()
const {
  createStudents,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");
const protect=require("../middlewares/authMiddleware")

router.route("/").post(createStudents).get(getAllStudents);

//get singleStudent and delete singleStudent
router
  .route("/:_id")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports=router;