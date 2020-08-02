const Workout = require("../models/workout");

module.exports = {
  newWorkout: (req, res) =>
    Workout.create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err)),

  getWorkout: (req, res) => {
    !req.query.id
      ? Workout.find({})
          .then((allWorkout) => res.send(allWorkout))
          .catch((err) => res.send(err))
      : Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  addExercise: async (req, res) => {
    try {
      const foundExercise = await Workout.findById(req.body.id);
      foundExercise.exercises.push(req.body);
      await foundExercise.save();
      res.send(foundExercise);
    } catch (error) {
      res.send(error);
    }
  },
};
