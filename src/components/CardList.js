import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card";

const catArr = ["Cat", "Bomb", "Shuffle", "Defuse"];

function CardList({ onWin, onLose }) {
  const [cards, setCards] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const savedCards = localStorage.getItem("savedCards");
    const savedNum = localStorage.getItem("savedNum");

    if (savedCards && savedNum) {
      setCards(JSON.parse(savedCards));
      setNum(JSON.parse(savedNum));
    } else {
      generateRandomCards();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCards", JSON.stringify(cards));
    localStorage.setItem("savedNum", JSON.stringify(num));
  }, [cards, num]);

  const generateRandomCards = () => {
    const randomNumbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * catArr.length)
    );

    const randomCards = randomNumbers.map(
      (randomNumber) => catArr[randomNumber]
    );

    setCards(randomCards);
  };

  const handleRemoveCard = (indexToRemove) => {
    setCards((prevCards) =>
      prevCards.filter((_, index) => index !== indexToRemove)
    );
    if (cards.length === 1) {
      onWin();
    }
  };

  const handleCardClick = (index) => {
    if (cards[index] === "Shuffle") {
      setNum(0);
      generateRandomCards();
    } else if (cards[index] === "Defuse") {
      setNum(num + 1);
      handleRemoveCard(index);
    } else if (cards[index] === "Cat") {
      handleRemoveCard(index);
    } else {
      if (num > 0) {
        setNum(num - 1);
        handleRemoveCard(index);
      } else {
        onLose();
      }
    }
  };
  const ButtonStyle = {
    marginTop: "100px",
  };
  return (
    <div>
      <h1 className="game-title">Kitty Kaboom</h1>
      <h3 className="defuce-card">Defuce Cards {num}</h3>
      <div className="card-grid">
        {cards.map((selectedElement, index) => (
          <Card
            key={index}
            selectedElement={selectedElement}
            handleClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <button
        className="new-game-button"
        style={ButtonStyle}
        onClick={() => (window.location.href = "/leaderboard")}
      >
        LeaderBoard
      </button>
    </div>
  );
}

export default CardList;
