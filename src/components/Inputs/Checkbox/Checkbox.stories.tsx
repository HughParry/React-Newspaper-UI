import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default-checkbox",
  label: "Default Checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
  id: "checked-checkbox",
  label: "Checked Checkbox",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled-checkbox",
  label: "Disabled Checkbox",
  disabled: true,
};
