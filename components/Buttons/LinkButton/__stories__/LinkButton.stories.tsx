import { Meta, StoryObj } from '@storybook/react';
import LinkButton from '../LinkButton';

type LinkButtonStoryType = StoryObj<typeof LinkButton>;

export const Default: LinkButtonStoryType = {
  render: args => <LinkButton {...args} />,
  args: {
    children: 'Link',
    href: '#',
  },
};

const meta: Meta<typeof LinkButton> = {
  title: 'Buttons/LinkButton',
  component: LinkButton,
};

export default meta;
