import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ButtonGroup from "./ButtonGroup";
import { ButtonGroupProps } from "./ButtonGroup.types";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  buttons: [
    {
      label: "Button 1",
      onClick: () => console.log("Button 1 clicked"),
      isActive: true,
    },
    { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
    { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Horizontal.args,
  vertical: true,
};
