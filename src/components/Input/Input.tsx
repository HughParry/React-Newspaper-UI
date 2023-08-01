import React, { FC, useState } from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

const StyledInput = styled.div<InputProps>`
  position: relative;
  width: 300px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: ${(props) =>
      props.error ? "#a9150b" : props.success ? "#067d68" : "#353637"};
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
    ${(props) =>
      props.orientation === "horizontal" ? "bottom: 0;" : "right: 0;"}
  }

  &:focus-within {
    &:before,
    &:after {
      transform: ${(props) =>
        props.orientation === "horizontal" ? "scaleX(1)" : "scaleY(1)"};
    }
  }

  input {
    height: 40px;
    width: 100%;
    border-radius: 3px;
    border: solid 2px
      ${(props) =>
        props.disabled
          ? "#e4e3ea"
          : props.error
          ? "#a9150b"
          : props.success
          ? "#067d68"
          : "#353637"};
    background-color: #fff;
    font-family: "Times New Roman", serif;
    box-shadow: none;
    &:focus {
      animation: typingAnimation 0.3s infinite; /* use infinite to keep repeating */
    }
  }

  @keyframes typingAnimation {
    0% {
      box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
      background-color: #fff;
    }
    50% {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      background-color: #f9f9f9;
    }
    100% {
      box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
      background-color: #fff;
    }
  }

  .line-top,
  .line-bottom {
    content: "";
    position: absolute;
    width: ${(props) => props.lineLength || 0}%;
    height: 2px;
    background: #000;
    transition: width 0.3s ease-in-out;
  }

  .line-top {
    top: -10px;
    left: 0;
  }

  .line-bottom {
    bottom: -10px;
    left: 0;
  }

  &:focus-within {
    .line-top,
    .line-bottom {
      width: ${(props) => props.lineLength || 0}%;
    }
  }
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  font-family: "Times New Roman", serif;
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  padding-bottom: 6px;
`;

const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  font-family: "Times New Roman", serif;
  color: #a9150b;
  padding-top: 4px;
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  font-family: "Times New Roman", serif;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  orientation = "vertical",
  onChange,
  placeholder,
  ...props
}) => {
  const [inputLength, setInputLength] = useState(0);
  const [lineLength, setLineLength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lengthPercentage = (e.target.value.length / 100) * 100; // Adjust maxLength as needed
    setLineLength(lengthPercentage);
    if (onChange) onChange(e);
  };

  return (
    <>
      <StyledInput
        inputLength={inputLength}
        orientation={orientation}
        error={error}
        success={success}
        disabled={disabled}
        lineLength={lineLength}
      >
        <input
          id={id}
          type="text"
          onChange={handleInputChange}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        ></input>
        <div className="line-top"></div> {/* Add this line */}
        <div className="line-bottom"></div> {/* Add this line */}
        <div className="lines"></div>
      </StyledInput>
    </>
  );
};

export default Input;
