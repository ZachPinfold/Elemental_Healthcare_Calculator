import React from "react";
import styled from "styled-components";
import Graph from "./Graph";
import { connect } from "react-redux";
import { updateCompetitor } from "../../../actions/elementalProductActions";

const Card = styled.div`
  height: 600px;
  width: 450px;
  border-radius: 5px;
  position: absolute;
  margin: 0;
  background-color: ${({ color }) =>
    (color === "cost" && "#009ade") || (color === "c02" && "#06d6a0")};
  left: ${({ front }) => (front && "35px") || (!front && "0px")};
  top: ${({ front }) => (front && "30px") || (!front && "0px")};
  z-index: ${({ front }) => (front && "1") || (!front && "0")};
  /* transition: left 0.3s; */
  transition: left 0.3s, top 0.5s;
`;

const CompetitorCard = ({
  color,
  front,
  toggleFlipCard,
  elementalCompetitors,
  updateCompetitor
}) => {
  const setCompetitor = e => {
    console.log(e);
    updateCompetitor(e);
  };

  return (
    <Card
      onClick={() => {
        if (!front) toggleFlipCard();
      }}
      front={front}
      color={color}
    >
      <div className='card-icon'>Icon</div>
      <div className='card-content'>
        <select onChange={e => setCompetitor(e.target.value)} name='' id=''>
          {elementalCompetitors.map(comp => (
            <option value={comp.name}>{comp.name}</option>
          ))}
        </select>
        <table style={{ textAlign: "left", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              borderBottom: "1px black solid"
            }}
          >
            <tr>
              <th>Saving</th>
            </tr>
          </div>
          <tr>
            <td>Company</td>
          </tr>
          <tr>
            <td>Company</td>
          </tr>
        </table>
        <Graph />
      </div>
    </Card>
  );
};

const mstp = state => ({
  elementalCompetitors: state.elementalProducts.elementalCompetitors
});

export default connect(mstp, { updateCompetitor })(CompetitorCard);
