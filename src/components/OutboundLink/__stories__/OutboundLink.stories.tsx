import type { Meta, StoryObj } from '@storybook/nextjs';
import OutboundLink from '../OutboundLink';

const meta: Meta<typeof OutboundLink> = {
  title: 'OutboundLink',
  component: OutboundLink,
};
export default meta;
type Story = StoryObj<typeof OutboundLink>;

export const Default: Story = {
  args: {
    href: 'https://operationcode.org',
    analyticsEventLabel: 'Storybook link',
    children: 'Operation Code',
  },
};

export const WithoutIcon: Story = {
  args: {
    href: 'https://operationcode.org',
    analyticsEventLabel: 'Storybook link',
    children: 'No icon link',
    hasIcon: false,
  },
};
