const express = require("express");
const router = express.Router();
const {
  createTrainee,
  getAllTrainees,
  getSingleTrainee,
  updateTrainee,
  deleteTrainee,
} = require("../controllers/traineeController");
// const protect = require("../middlewares/authMiddleware");

router.route("/").post(createTrainee).get(getAllTrainees);
router
  .route("/:_id")
  .get(getSingleTrainee)
  .put(updateTrainee)
  .delete(deleteTrainee);

module.exports = router;
