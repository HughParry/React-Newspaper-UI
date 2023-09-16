import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Spinner from "./Spinner";
import { SpinnerProps } from "./Spinner.types";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: "Loading, please wait...",
};

export const Stationary = Template.bind({});
Stationary.args = {
  stationary: true,
};

export const DoubleDesign = Template.bind({});
DoubleDesign.args = {
  design: "double",
};

export const DotsDesign = Template.bind({});
DotsDesign.args = {
  design: "dots",
};

export const BarsDesign = Template.bind({});
BarsDesign.args = {
  design: "bars",
};
