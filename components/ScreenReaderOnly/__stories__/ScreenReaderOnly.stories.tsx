import { Meta, StoryObj } from '@storybook/react';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

type ScreenReaderOnlyStoryType = StoryObj<typeof ScreenReaderOnly>;

const meta: Meta<typeof ScreenReaderOnly> = {
  title: 'ScreenReaderOnly',
  component: ScreenReaderOnly,
  args: {
    children: 'ScreenReader content',
  },
  decorators: [
    ScreenReaderOnlyStory => (
      <>
        <span>Content never displayed, but it is rendered</span>
        <ScreenReaderOnlyStory />
      </>
    ),
  ],
};

export default meta;

export const Default: ScreenReaderOnlyStoryType = {
  render: args => <ScreenReaderOnly {...args} />,
};
