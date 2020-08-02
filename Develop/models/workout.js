const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
  type: {
    type: String,
    required: "Must enter exercise type!",
  },
  name: {
    type: String,
    required: "Must enter exercise name!",
  },
  duration: Number,

  weight: Number,

  sets: Number,

  reps: Number,

  distance: Number,
});
const workoutSchema = new Schema({
  day: new Date().setDate(new Date().getDate() - 10),
  exercises: [{ subSchema }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
