import React from 'react';

import ScreenReaderOnly from '../ScreenReaderOnly';

export default {
  component: ScreenReaderOnly,
  title: 'ScreenReaderOnly',
};

const Template = arguments_ => {
  return (
    <>
      <span>Content never displayed, but it is rendered</span>
      <ScreenReaderOnly {...arguments_} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'ScreenReader content',
};
