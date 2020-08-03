const router = require("express").Router();
const {
  newWorkout,
  getWorkout,
  addExercise,
} = require("../controllers/workout-controller.js");

router.post("/api/workouts", newWorkout);
router.get("/api/workouts", getWorkout);
router.put("/api/workouts/:id", addExercise);

router.get("/api/workouts/range", getWorkout);

module.exports = router;
