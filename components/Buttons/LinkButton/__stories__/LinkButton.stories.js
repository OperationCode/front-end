import React from 'react';

import LinkButton from '../LinkButton';

export default {
  component: LinkButton,
  title: 'Buttons/LinkButton',
};

const Template = arguments_ => <LinkButton {...arguments_} />;

// Default LinkButton supplied with only required args
export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: '#',
};
