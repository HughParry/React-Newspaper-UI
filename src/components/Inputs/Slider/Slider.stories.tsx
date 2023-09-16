import React from "react";
import Slider from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Slider:",
  min: 0,
  max: 100,
  step: 1,
  value: 50,
};
