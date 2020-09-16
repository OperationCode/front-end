import React from 'react';

import Card from '../Card';

export default {
  component: Card,
  title: 'Cards/Card',
};

const Template = arguments_ => <Card {...arguments_} />;

// Default Card supplied with only required args
export const Default = Template.bind({});
Default.args = {
  children: 'Card content...',
};
