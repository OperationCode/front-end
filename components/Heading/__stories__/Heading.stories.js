import React from 'react';

import Heading from '../Heading';

export default {
  component: Heading,
  title: 'Heading',
  argTypes: {
    headingLevel: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
      },
    },
  },
};

const Template = arguments_ => <Heading {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  text: `Heading Text`,
};
