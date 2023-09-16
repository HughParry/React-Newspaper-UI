import React, { useState } from "react";
import { SpeedDialProps } from "./SpeedDial.types";
import styled, { keyframes } from "styled-components";

const lineAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const SpeedDialContainer = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
`;

const SpeedDialButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #353637;
  color: #ffffff;
  border: solid 2px #353637;
  cursor: pointer;
  font-size: 24px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: #000;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
      animation: ${lineAnimation} 0.3s forwards;
    }
  }
`;

const SpeedDialItemContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
`;

const SpeedDialItemButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #067d68;
  color: #ffffff;
  border: solid 2px #067d68;
  cursor: pointer;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: #000;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
      animation: ${lineAnimation} 0.3s forwards;
    }
  }
`;

const SpeedDial: React.FC<SpeedDialProps> = ({
  mainIcon,
  items,
  direction = "up",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMainButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SpeedDialContainer>
      <SpeedDialButton onClick={handleMainButtonClick}>
        {mainIcon}
      </SpeedDialButton>
      <SpeedDialItemContainer isOpen={isOpen}>
        {items.map((item, index) => (
          <SpeedDialItemButton key={index} onClick={item.onClick}>
            {item.icon}
          </SpeedDialItemButton>
        ))}
      </SpeedDialItemContainer>
    </SpeedDialContainer>
  );
};

export default SpeedDial;
