import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from '../HeroBanner';

type HeroBannerStoryType = StoryObj<typeof HeroBanner>;

const meta: Meta<typeof HeroBanner> = {
  title: 'HeroBanner',
  component: HeroBanner,
  args: {
    title: 'Banner Title',
  },
};

export default meta;

export const Default: HeroBannerStoryType = {
  render: args => <HeroBanner {...args} />,
};
