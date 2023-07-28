import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  placeholder: 'Placeholder...',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  placeholder: 'Placeholder...',
  error: true,
  message: 'Error message...',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  placeholder: 'Placeholder...',
  success: true,
};
