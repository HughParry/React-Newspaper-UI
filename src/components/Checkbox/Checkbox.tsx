import React, { FC } from "react";
import styled from "styled-components";

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckboxLabel = styled.label<CheckboxProps>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #353637;
  cursor: pointer;
  margin-right: 8px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    width: 20px;
    height: 2px;
    background-color: #353637;
    left: 0;
    top: -5px;
  }

  &::after {
    width: 2px;
    height: 20px;
    background-color: #353637;
    left: -5px;
    top: 0;
  }
`;

const StyledCheckboxInput = styled.input<CheckboxProps>`
  display: none;

  &:checked + ${StyledCheckboxLabel}::after {
    content: "✓";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #067d68; // Tick color
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }
`;

const StyledCheckboxText = styled.span<CheckboxProps>`
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  font-family: "Times New Roman", serif;
`;

const Checkbox: FC<CheckboxProps> = ({
  id,
  checked,
  disabled,
  label,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.checked);
  };

  return (
    <StyledCheckboxContainer>
      <StyledCheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <StyledCheckboxLabel htmlFor={id} />
      <StyledCheckboxText disabled={disabled}>{label}</StyledCheckboxText>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
