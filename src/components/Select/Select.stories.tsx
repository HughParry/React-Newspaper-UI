import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Select, { SelectProps } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select an option...",
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3", disabled: true },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...Default.args,
  value: "option2",
};
