import type { Meta, StoryObj } from '@storybook/react';
import Content from '../Content';

type ContentStoryType = StoryObj<typeof Content>;

const multiColumnArray = [
  <div key="col1">
    <p>Column 1</p>
  </div>,
  <div key="col2">
    <p>Column 2</p>
  </div>,
  <div key="col3">
    <p>Column 3</p>
  </div>,
];

const meta: Meta<typeof Content> = {
  title: 'Content',
  component: Content,
  args: {
    columns: multiColumnArray.slice(0, 1),
    title: 'One column content',
  },
};

export default meta;

/**
 * Default Content supplied with only one column
 */
export const Default: ContentStoryType = {
  render: args => <Content {...args} />,
};

/**
 * Content supplied with multiple columns
 */
export const MultipleColumns: ContentStoryType = {
  ...Default,
  args: {
    columns: multiColumnArray,
    title: 'Multiple column content',
  },
};
