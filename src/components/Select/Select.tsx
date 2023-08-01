import React, { FC } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  position: relative;
  width: 200px;
  padding: 10px;
  border: none;
  background: #fff;
  appearance: none;
  cursor: pointer;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const StyledOption = styled.option``;

const SelectContainer = styled.div`
  position: relative;
  padding: 10px;
  background: linear-gradient(to right, #f0f0f0, #fff);

  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #000;
    animation: lineAnimation 1s infinite alternate;
  }

  &:before {
    top: -8px;
    left: -50%;
    width: 150%;
    height: 8px;
    transform-origin: left;
  }

  &:after {
    bottom: -8px;
    right: 0;
    width: 8px;
    height: 120%;
    transform-origin: bottom;
  }

  @keyframes lineAnimation {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
`;

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  options,
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <SelectContainer>
      <StyledSelect value={value} onChange={handleChange} disabled={disabled}>
        {placeholder && <StyledOption value="">{placeholder}</StyledOption>}
        {options.map((option, index) => (
          <StyledOption
            key={index}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default Select;
