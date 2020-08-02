const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const workoutRoutes = require("./routes/workout-routes.js");
app.use(workoutRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
