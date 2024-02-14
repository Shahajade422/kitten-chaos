const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const URL = process.env.MONGO_DATABASE_URL;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000/"],
//     methods: ["GET", "POST", "PUT"],
//   })
// );

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

mongoose.connect(URL);

require("./models/UserModel");

app.get("/", (req, res) => {
  res.send("Working");
});
app.use("/api/users", require("./routes/user"));
app.use("/api/users", require("./routes/score"));
app.use("/api", require("./routes/leaderboard"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
