import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./Spinner.types";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  position: relative;
  width: 40px;
  height: 40px;
  border: 4px solid #353637;
  border-top: 4px solid #a9150b;
  border-radius: 0;
  font-family: "Times New Roman", serif;
  animation: ${(props) => (props.spinning ? spinAnimation : "none")} 2s linear
    infinite;
  /* Add specific styles for different designs */
  ${(props) =>
    props.design === "double" &&
    `
    border-right: 4px solid #a9150b;
  `}
  ${(props) =>
    props.design === "dots" &&
    `
    border-top: 4px dotted #a9150b;
  `}
  ${(props) =>
    props.design === "bars" &&
    `
    border-top: 4px double #a9150b;
  `}
`;

const SpinnerContainer = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Times New Roman", serif;
`;

const SpinnerText = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-family: "Times New Roman", serif;
  color: #080808;
`;

const Spinner: FC<SpinnerProps> = ({
  message,
  stationary = false,
  spinning = true,
  design = "default",
}) => {
  return (
    <SpinnerContainer>
      <StyledSpinner
        spinning={spinning}
        design={design}
        stationary={stationary}
      />
      {message && <SpinnerText>{message}</SpinnerText>}
    </SpinnerContainer>
  );
};

export default Spinner;
