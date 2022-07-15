const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true, max: 5, min: 0 },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("movie", movieSchema);
