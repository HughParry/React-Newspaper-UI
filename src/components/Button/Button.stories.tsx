import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { primary: true, size: 'medium', text: 'Primary Button' };

export const Secondary = Template.bind({});
Secondary.args = { primary: false, size: 'medium', text: 'Secondary Button' };
