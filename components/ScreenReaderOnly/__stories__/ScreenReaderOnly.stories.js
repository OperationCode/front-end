import React from 'react';

import ScreenReaderOnly from '../ScreenReaderOnly';

export default {
  component: ScreenReaderOnly,
  title: 'ScreenReaderOnly',
};

const Template = arguments_ => <ScreenReaderOnly {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This content is never displayed, but it is rendered',
};
