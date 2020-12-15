import React from 'react';

import Blog from '../Blog';

export default {
  component: Blog,
  title: 'Blog',
};

const Template = arguments_ => <Blog {...arguments_} />;

export const Default = Template.bind({});

/** Default Blog supplied with only required args */
Default.args = {
  children: '',
};
