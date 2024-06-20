import { Meta, StoryObj } from '@storybook/react';
import { FeaturedJobItem } from '../FeaturedJobItem';
import { descriptions } from '@/common/constants/descriptions';

type FeaturedJobItemStoryType = StoryObj<typeof FeaturedJobItem>;

const meta: Meta<typeof FeaturedJobItem> = {
  title: 'FeaturedJobItem',
  component: FeaturedJobItem,
};

export default meta;

/**
 * Default FeaturedJobItem supplied with only required args.
 */
export const Default: FeaturedJobItemStoryType = {
  render: args => <FeaturedJobItem {...args} />,
  args: {
    title: 'Job Title',
    source: 'Company Name',
    sourceUrl: '#',
    description: descriptions.long,
  },
};
