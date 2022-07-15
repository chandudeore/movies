const express = require("express");
const connect = require("./config/db");
const movieController = require("./Controllers/movie.controller");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/movie", movieController);

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (err) {
    console.log(err);
  }
});
