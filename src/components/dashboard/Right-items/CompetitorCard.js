import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 500px;
  width: 200px;
  background-color: ${({ color }) =>
    (color === "cost" && "#009ade") || (color === "c02" && "#06d6a0")};
`;

export default function CompetitorCard({ color }) {
  return <Card color={color} />;
}
