import React, { useState } from "react";
import "./Card.css";

function Card({ selectedElement, handleClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setIsFlipped(false);
      handleClick();
    }, 1000);
  };

  return (
    <div
      className={`card ${isFlipped ? "flip" : ""}`}
      onClick={handleCardClick}
      style={{ transition: isFlipped ? "transform 0.5s" : "" }}
    >
      <div className="front">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWdX-Om114uwHfMXhOxZv6wTYJgTXjaw49T7M_5bEOA&s"
          alt=""
        />
      </div>
      <div className="back">{selectedElement}</div>
    </div>
  );
}

export default Card;
