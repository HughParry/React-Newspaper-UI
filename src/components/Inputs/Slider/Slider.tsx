import React from "react";
import styled from "styled-components";
import { SliderProps } from "./Slider.types";

const SliderContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-family: "Times New Roman", serif;
  margin-bottom: 10px;
`;

const StyledSlider = styled.input`
  width: 100%;
  appearance: none;
  background: #353637;
  height: 4px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    background: #067d68;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #067d68;
    cursor: pointer;
  }
`;

const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(Number(e.target.value));
    }
  };

  return (
    <SliderContainer>
      {label && <Label>{label}</Label>}
      <StyledSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </SliderContainer>
  );
};

export default Slider;
