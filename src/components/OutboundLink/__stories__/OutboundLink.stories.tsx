import type { Meta, StoryObj } from '@storybook/nextjs';
import { descriptions } from '@/common/constants/descriptions';
import OutboundLink from '../OutboundLink';

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
  render: (args) => <OutboundLink {...args} />,
};
