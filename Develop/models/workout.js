const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema(
  {
    type: {
      type: String,
      required: "Must enter exercise type!",
    },
    name: {
      type: String,
      required: "Must enter exercise name!",
    },
    duration: { type: Number },

    weight: { type: Number },

    sets: { type: Number },

    reps: { type: Number },

    distance: { type: Number },
  },
  { _id: false }
);

const workoutSchema = new Schema({
  day: { type: Number },
  exercises: [subSchema],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
