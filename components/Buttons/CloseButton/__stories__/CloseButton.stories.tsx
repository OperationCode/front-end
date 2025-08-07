import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from '../CloseButton';

type CloseButtonStoryType = StoryObj<typeof CloseButton>;

const meta: Meta<typeof CloseButton> = {
  title: 'Buttons/Closebutton',
  component: CloseButton,
  args: {
    theme: 'primary',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: CloseButtonStoryType = {
  render: args => (
    <div className="relative bg-slate-500 h-20">
      <CloseButton {...args} />
    </div>
  ),
};
