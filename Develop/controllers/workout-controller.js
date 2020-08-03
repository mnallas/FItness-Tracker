const Workout = require("../models/workout");

module.exports = {
  newWorkout: (req, res) =>
    Workout.create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err)),

  getWorkout: (req, res) => {
    Workout.find({})
      .then((foundWorkout) => {
        res.send(foundWorkout);
        console.log(foundWorkout);
      })
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
