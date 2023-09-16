import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Tabs, { TabsProps } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
  ],
};
