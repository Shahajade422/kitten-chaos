import CardList from "./components/CardList.js";
import Leaderboard from "./components/Leaderboard.js";
import StartGame from "./components/StartGame.js";
import axios from "axios";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleWin = async () => {
    try {
      const username = localStorage.getItem("userName");

      const response = await axios.post(
        "https://kitten-chaos.vercel.app/api/users/score",
        { username }
      );
      const { score } = response.data;

      const updatedScore = score + 1;

      await axios.put("https://kitten-chaos.vercel.app/api/users/updateScore", {
        username,
        score: updatedScore,
      });
      setMessage("Won");
      navigate("/leaderboard");
    } catch (error) {
      console.error("Error handling win:", error);
    }
  };

  const handleLose = () => {
    setMessage("Lose");
    navigate("/leaderboard");
  };
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<StartGame></StartGame>}></Route>
        <Route
          path="/Card"
          element={<CardList onWin={handleWin} onLose={handleLose} />}
        />
        <Route path="/leaderboard" element={<Leaderboard data={message} />} />
      </Routes>
    </div>
  );
}

export default App;
