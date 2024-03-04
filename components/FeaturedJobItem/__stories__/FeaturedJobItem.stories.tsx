import { Meta, StoryObj } from '@storybook/react'
import { descriptions } from 'common/constants/descriptions';
import FeaturedJobItem from '../FeaturedJobItem';

type FeaturedJobItemStoryType = StoryObj<typeof FeaturedJobItem>

const meta: Meta<typeof FeaturedJobItem> = {
  title: 'FeaturedJobItem',
  component: FeaturedJobItem
}

export default meta

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
  }
}

// export default {
//   component: FeaturedJobItem,
//   title: 'FeaturedJobItem',
// };

// const Template = arguments_ => <FeaturedJobItem {...arguments_} />;

// // Default FeaturedJobItem supplied with only required args
// export const Default = Template.bind({});
// Default.args = {
  // title: 'Job Title',
  // source: 'Company Name',
  // sourceUrl: '#',
  // description: descriptions.long,
// };
