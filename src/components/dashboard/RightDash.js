import React from "react";
import CompetitorCard from "./Right-items/CompetitorCard";

export default function RightDash() {
  return (
    <div style={{ width: "450px", display: "flex", backgroundColor: "green" }}>
      <CompetitorCard color={"cost"} />
      <CompetitorCard color={"c02"} />
    </div>
  );
}
