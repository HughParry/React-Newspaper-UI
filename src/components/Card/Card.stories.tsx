import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ante id sapien vulputate porta.',
};
