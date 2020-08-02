const router = require("express").Router();
const {
  newWorkout,
  getWorkout,
  addExercise,
} = require("../controllers/workout-controller.js");

router.post("/workout", newWorkout);
router.get("/workout", getWorkout);
router.put("/workout", addExercise);

module.exports = router;
