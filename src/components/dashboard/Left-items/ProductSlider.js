import React, { useState } from "react";
import styled from "styled-components";

const sliderThumbStyles = props => `
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

export default function ProductSlider({ name }) {
  const [value, setValue] = useState(0);

  const onSlideChange = () => {};

  return (
    <div>
      {name}
      <Styles opacity={value > 15 ? value / 255 : 0.2} color={"color"}>
        <input
          type='range'
          min={0}
          max={255}
          value={value}
          className='slider'
          onChange={e => {
            setValue(e.target.value);
            onSlideChange(e.target.value);
          }}
        />
        <div className='value'>{value}</div>
      </Styles>
    </div>
  );
}
