const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  paymentType:{type: String, required: true}
});

module.exports = mongoose.model("user", User);