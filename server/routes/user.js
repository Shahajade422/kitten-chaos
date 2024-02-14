const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("USER");

router.post("/", async (req, res) => {
  const { username } = req.body;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res.status(200).json({ message: "User already exists" });
    }

    user = new User({ username });
    await user.save();

    return res.status(201).json({ message: "User stored successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
