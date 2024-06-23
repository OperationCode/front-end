import { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '../CloseButton';

type CloseButtonStoryType = StoryObj<typeof CloseButton>;

const meta: Meta<typeof CloseButton> = {
  title: 'Buttons/Closebutton',
  component: CloseButton,
};

export default meta;

export const Default: CloseButtonStoryType = {
  render: args => <CloseButton {...args} />,
  args: {
    theme: 'primary',
  },
};
