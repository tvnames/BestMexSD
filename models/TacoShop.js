const mongoose = require("mongoose");
const { isNumber } = require("../util/validate");

const HASH_SALT_ROUNDS = 10;

// Add additional fields to the user schema as needed for your app. Feel free to
// modify username, email, and password validations. email as part of the login
// credentials.
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  reviews: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    validate: {
      validator: isNumber,
      message: "Not a valid phone number",
    },
  },
  zip: {
    type: Number,
    required: true,
    trim: true,
    validate: {
      validator: isNumber,
      message: "Not a valid zip code",
    },
  },
});

const TacoShop = mongoose.model("TacoShop", UserSchema);

module.exports = TacoShop;
