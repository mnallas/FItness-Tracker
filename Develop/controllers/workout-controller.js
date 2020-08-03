const Workout = require("../models/workout");

module.exports = {
  newWorkout: (req, res) => {
    const workout = {
      day: new Date().getTime(),
      exercises: [req.body],
    };
    Workout.create(workout)
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
      const foundExercise = await Workout.findById(req.params.id);
      foundExercise.exercises.push({
        day: new Date().getTime(),
        exercise: [req.body],
      });
      await foundExercise.save();
      res.send(foundExercise);
    } catch (error) {
      res.send(error);
    }
  },
};
