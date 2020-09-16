import React from 'react';

import Button from '../Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = arguments_ => <Button {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: { action: 'Button Clicked!' },
};
