import React from "react";
import styled from "styled-components";
import { SwitchProps } from "./Switch.types";

const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.span`
  font-family: "Times New Roman", serif;
  margin-right: 8px;
`;

const StyledSwitch = styled.div<SwitchProps>`
  position: relative;
  width: 60px;
  height: 24px;
  background-color: ${(props) => (props.checked ? "#067d68" : "#e4e3ea")};
  border: 2px solid #353637;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 60%;
    background-color: #353637;
    transition: all 0.3s ease;
  }

  &:before {
    top: 5%;
    left: 20%;
    transform: ${(props) => (props.checked ? "rotate(45deg)" : "rotate(0deg)")};
  }

  &:after {
    bottom: 5%;
    right: 20%;
    transform: ${(props) =>
      props.checked ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;

const StyledThumb = styled.div<SwitchProps>`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.checked ? "34px" : "2px")};
  width: 24px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #353637;
  transition: left 0.3s ease;
`;

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <StyledSwitch
      checked={checked}
      onClick={() => onChange && onChange(!checked)}
    >
      <StyledThumb checked={checked} />
    </StyledSwitch>
  );
};

export default Switch;
