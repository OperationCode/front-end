import type { Meta, StoryObj } from '@storybook/nextjs';
import HeroBanner from '../HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'HeroBanner',
  component: HeroBanner,
};
export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    title: 'We Are Operation Code',
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Join Us',
    children: <p className="text-lg text-white">Help us support veterans in tech.</p>,
  },
};
