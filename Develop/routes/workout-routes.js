const router = require("express").Router();
const {
  newWorkout,
  getWorkout,
  addExercise,
} = require("../controllers/workout-controller.js");

router.post("/api/workouts", newWorkout);
router.get("/api/workouts", getWorkout);
router.put("/api/workouts", addExercise);

module.exports = router;
