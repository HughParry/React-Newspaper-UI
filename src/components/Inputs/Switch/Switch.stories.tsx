import React from "react";
import Switch from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enable Feature:",
  checked: false,
};
