const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3060;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
