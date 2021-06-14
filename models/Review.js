const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true,
  //   minLength: 2,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
