const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  score: { type: Number, default: 0 },
});

mongoose.model("USER", userSchema);
