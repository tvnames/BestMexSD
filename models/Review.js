const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  rating: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  rating: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  text: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
