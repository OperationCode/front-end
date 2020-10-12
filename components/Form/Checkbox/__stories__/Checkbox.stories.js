import React from 'react';

import Checkbox from '../Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

/** Default Checkbox supplied with only required args */
Default.args = {
  children: '',
};

