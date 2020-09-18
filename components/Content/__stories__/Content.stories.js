import React from 'react';

import Content from '../Content';

const multiColumnArray = [
  <div>
    <p>Column 1</p>
  </div>,
  <div>
    <p>Column 2</p>
  </div>,
  <div>
    <p>Column 3</p>
  </div>,
];

export default {
  component: Content,
  title: 'Content',
};

const Template = arguments_ => <Content {...arguments_} />;

// Default Content supplied with only one column
export const Default = Template.bind({});
Default.args = {
  columns: multiColumnArray.slice(0, 1),
  title: 'One column content',
};

// Container supplied with multiple columns
export const MultipleColumns = Template.bind({});
MultipleColumns.args = {
  ...Default.args,
  columns: multiColumnArray,
  title: 'Multiple column content',
};
