const express = require("express");
const Movie = require("../models/movie.models");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    let movie = await Movie.create(req.body);

    return res.send(movie);
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("", async (req, res) => {
  try {
    let movie = await Movie.find().lean().exec();

    return res.send(movie);
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id).lean().exec();

    return res.send(movie);
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(movie);
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(movie);
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
