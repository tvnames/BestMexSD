const mongoose = require("mongoose");
const { isPhoneNum, isZip } = require("../util/validate");

// Add additional fields to the user schema as needed for your app. Feel free to
// modify username, email, and password validations. email as part of the login
// credentials.
const TacoShopSchema = new mongoose.Schema({
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
      validator: isPhoneNum,
      message: "Not a valid phone number",
    },
  },
  zip: {
    type: Number,
    required: true,
    trim: true,
    validate: {
      validator: isZip,
      message: "Not a valid zip code",
    },
  },
});

const TacoShop = mongoose.model("TacoShop", TacoShopSchema);

module.exports = TacoShop;
