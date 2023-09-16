import React from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { ButtonGroupContainer, GroupButton } from "./ButtonGroup.styles";

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  vertical = false,
}) => (
  <ButtonGroupContainer vertical={vertical}>
    {buttons.map((button, index) => (
      <GroupButton
        key={index}
        onClick={button.onClick}
        isActive={button.isActive}
        label={button.label}
      >
        {button.label}
      </GroupButton>
    ))}
  </ButtonGroupContainer>
);

export default ButtonGroup;
