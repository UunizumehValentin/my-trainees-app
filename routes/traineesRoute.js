const express = require("express");
const router = express.Router();
const {
  createTrainee,
  getAllTrainees,
  getSingleTrainee, updateTrainee, deleteTrainee
} = require("../controllers/traineeController");
const protect=require("../middlewares/authMiddleware")

router.route("/").post(protect,createTrainee).get(protect,getAllTrainees);
router
  .route("/:_id")
  .get(protect,getSingleTrainee)
  .put(protect,updateTrainee)
  .delete(protect,deleteTrainee);

module.exports = router;
