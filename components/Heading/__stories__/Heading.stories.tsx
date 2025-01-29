import type { Meta, StoryObj } from '@storybook/react';
import Heading from '../Heading';

type HeadingStoryType = StoryObj<typeof Heading>;

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  args: {
    text: 'Heading text',
  },
};

export default meta;

export const Default: HeadingStoryType = {
  render: args => <Heading {...args} />,
};
