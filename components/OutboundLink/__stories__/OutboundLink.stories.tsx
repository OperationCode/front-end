import { Meta, StoryObj } from '@storybook/react';
import { OutboundLink } from '../OutboundLink';
import { descriptions } from '@/common/constants/descriptions';

type OutboudLinkStoryType = StoryObj<typeof OutboundLink>;

const meta: Meta<typeof OutboundLink> = {
  title: 'OutboundLink',
  component: OutboundLink,
  args: {
    analyticsEventLabel: 'Event label',
    children: descriptions.short,
    href: '#',
  },
};

export default meta;

export const Default: OutboudLinkStoryType = {
  render: args => <OutboundLink {...args} />,
};
