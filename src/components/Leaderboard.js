import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";
import { Link } from "react-router-dom";

function Leaderboard({ data }) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(data);
  }, [data]);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get(
        "https://kitten-chaos.vercel.app/api/leaderboard"
      );
      setLeaderboardData(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  function handleClick() {
    localStorage.removeItem("savedCards");
    localStorage.removeItem("savedNum");
    setMessage("");
  }

  const resultStyle = {
    color: message === "Won" ? "green" : "red",
    textAlign: "center",
  };

  return (
    <div className="leaderboard">
      {message && <h2 style={resultStyle}>You {message} the Game</h2>}
      <h2 className="leaderboard-title">Leaderboard</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td>{data.score} wins</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/card" style={{ textDecoration: "none" }}>
        <button className="new-game-button" onClick={handleClick}>
          Start New Game
        </button>
      </Link>
      {!message && (
        <Link to="/card" style={{ textDecoration: "none" }}>
          <button className="new-game-button">Return to game</button>
        </Link>
      )}
    </div>
  );
}

export default Leaderboard;
