import type { Meta, StoryObj } from '@storybook/nextjs';
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
  render: (args) => (
    <div className="relative h-20 bg-slate-500">
      <CloseButton {...args} />
    </div>
  ),
};
