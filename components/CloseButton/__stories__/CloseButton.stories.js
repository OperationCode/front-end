import React from 'react';

import CloseButton from '../CloseButton';

export default {
  component: CloseButton,
  title: 'CloseButton',
};

const Template = arguments_ => <CloseButton {...arguments_} />;

// Default CloseButton supplied with only required args
export const Default = Template.bind({});
