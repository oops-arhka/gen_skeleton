const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema({
  title: String,
  questions: Array,
  answers: Array
});

module.exports = mongoose.model("Round", roundSchema);
