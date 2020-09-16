import React, { useState } from "react";
import CompetitorCard from "./Right-items/CompetitorCard";

export default function RightDash() {
  const [flipCard, toggleFlipCard] = useState(false);

  const toggleFlip = () => {
    toggleFlipCard(!flipCard);
  };

  return (
    <div
      style={{ width: "450px", position: "relative", backgroundColor: "blue" }}
    >
      <CompetitorCard
        toggleFlipCard={toggleFlip}
        color={"cost"}
        front={!flipCard}
      />
      <CompetitorCard
        toggleFlipCard={toggleFlip}
        color={"c02"}
        front={flipCard}
      />
    </div>
  );
}
