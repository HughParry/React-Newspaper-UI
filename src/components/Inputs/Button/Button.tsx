import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  border: 1px solid #000;
  line-height: 1.5;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  font-family: "Times New Roman", serif;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: #000;
  background-color: #f8f8f8;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #000;
    transform: ${(props) =>
      props.orientation === "horizontal" ? "scaleX(0)" : "scaleY(0)"};
    transition: transform 0.3s ease-in-out;
  }

  &:before,
  &:after {
    ${(props) =>
      props.orientation === "horizontal"
        ? `
            width: 100%;
            height: 2px;
            left: 0;
          `
        : `
            width: 2px;
            height: 100%;
            top: 0;
          `}
  }

  &:before {
    ${(props) => (props.orientation === "horizontal" ? "top: 0;" : "left: 0;")}
  }

  &:after {
    ${(props) => (props.orientation === "horizontal" ? "bottom: 0;" : "right: 0;")}
  }

  &:hover {
    background-color: #f0f0f0;
    border: 1px solid #444;

    &:before,
    &:after {
      transform: ${(props) =>
        props.orientation === "horizontal" ? "scaleX(1)" : "scaleY(1)"};
    }
  }

  &:active {
    border: solid 2px #444;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  orientation = "vertical", // Default to vertical
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      orientation={orientation}
      {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
