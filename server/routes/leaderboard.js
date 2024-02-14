const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("USER");

router.get("/leaderboard", async (req, res) => {
  try {
    const leaderboardData = await User.find().sort({ score: -1 }).limit(100);
    res.json(leaderboardData);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
