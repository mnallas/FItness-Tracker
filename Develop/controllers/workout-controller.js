const Workout = require("../models/workout");

module.exports = {
  newWorkout: (req, res) => {
    Workout.create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },

  getWorkout: (req, res) => {
    !req.query.id
      ? Workout.find({})
          // .populate("authorId", "email password")
          .then((allWorkout) => res.send(allWorkout))
          .catch((err) => res.send(err))
      : Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  addExercise: async (req, res) => {
    try {
      const exercise = await Workout.findById(req.params.id);
      exercise.exercises.push(req.body);
      await exercise.save();
      res.send(exercise);
    } catch (err) {
      res.send(err);
    }
  },
};
