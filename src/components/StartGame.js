import React, { useState } from "react";
import "./StartGame.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StartGame() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartGame = () => {
    if (username.trim() !== "") {
      if (/^\d+$/.test(username)) {
        setErrorMessage(
          "Username must contain at least one non-numeric character."
        );
      } else {
        setIsLoading(true);
        axios
          .post("https://kitten-chaos.vercel.app/api/users", { username })
          .then((response) => {
            localStorage.removeItem("savedCards");
            localStorage.removeItem("savedNum");
            navigate("/card");
            localStorage.setItem("userName", username);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } else {
      setErrorMessage("Please enter a username to start the game.");
    }
  };

  return (
    <div className="start-game-container">
      <h1 className="start-game-title">Kitten Chaos</h1>
      <h2 className="start-game-subtitle">Shuffle, Defuse, Survive!</h2>
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={handleInputChange}
        className="username-input"
      />
      <button onClick={handleStartGame} className="start-game-button">
        {isLoading ? <div className="loader"></div> : "Start Game"}
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default StartGame;
