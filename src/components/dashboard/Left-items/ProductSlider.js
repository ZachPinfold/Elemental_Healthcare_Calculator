import React, { useState } from "react";
import styled from "styled-components";
import { slideChange } from "../../../actions/elementalProductActions";
import { connect } from "react-redux";

const sliderThumbStyles = () => `
 width: 25px;
 height: 25px;
 background: green;
 cursor: pointer;
 ouline: 5px solid green;
 opacity: 1;
 -webkit-transition: .2s;
 transition: opacity: .2s;
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: "grey";
  margin-top: 2rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 400px;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${sliderThumbStyles()}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

const ProductSlider = ({ slideChange, name, competitorProducts }) => {
  const [value, setValue] = useState(0);

  const onSlideChange = e => {
    const toNum = parseInt(e);
    slideChange(toNum, name);
  };

  return (
    <div>
      {name}
      <Styles opacity={value > 15 ? value / 20 : 0.2} color={"color"}>
        <input
          type='range'
          min={0}
          max={20}
          value={value}
          className='slider'
          onMouseUp={e => {
            onSlideChange(e.target.value);
          }}
          onChange={e => setValue(e.target.value)}
        />
        <div className='value'>{value}</div>
      </Styles>
    </div>
  );
};

export default connect(null, { slideChange })(ProductSlider);
