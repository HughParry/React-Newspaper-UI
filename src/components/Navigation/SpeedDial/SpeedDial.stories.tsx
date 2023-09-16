import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SpeedDial from "./SpeedDial";
import { SpeedDialProps } from "./SpeedDial.types";

export default {
  title: "Components/SpeedDial",
  component: SpeedDial,
} as Meta;

const Template: Story<SpeedDialProps> = (args) => <SpeedDial {...args} />;

export const Default = Template.bind({});
Default.args = {
  mainIcon: "+",
  items: [
    { icon: "A", label: "Action A", onClick: () => console.log("Action A") },
    { icon: "B", label: "Action B", onClick: () => console.log("Action B") },
    { icon: "C", label: "Action C", onClick: () => console.log("Action C") },
  ],
};
