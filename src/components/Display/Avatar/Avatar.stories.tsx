import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

export default {
  title: "DataDisplay/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  imageUrl: "path_to_image.jpg",
  size: "medium",
};

export const InitialsAvatar = Template.bind({});
InitialsAvatar.args = {
  initials: "JD",
  size: "medium",
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  initials: "JD",
  size: "small",
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  initials: "JD",
  size: "large",
};
