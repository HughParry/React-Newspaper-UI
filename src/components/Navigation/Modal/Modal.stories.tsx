import React from "react";
import { Meta, Story } from "@storybook/react";
import Modal from "./Modal";
import { ModalProps } from "./Modal.types";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  title: "Modal Title",
  children: "This is the content inside the modal.",
  onClose: () => alert("Close button clicked!"),
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  title: "Modal Title",
  children: "This is the content inside the modal.",
  onClose: () => alert("Close button clicked!"),
};
