const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("USER");

router.post("/score", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ score: user.score });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

router.put("/updateScore", async (req, res) => {
  const { username, score } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.score = score;
    await user.save();
    return res.status(200).json({ message: "User score updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
