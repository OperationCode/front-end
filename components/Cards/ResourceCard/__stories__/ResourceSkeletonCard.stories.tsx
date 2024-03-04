import { Meta, StoryObj } from '@storybook/react';
import ResourceSkeletonCard from '../ResourceSkeletonCard';

type ResourceSkeletonCardStoryType = StoryObj<typeof ResourceSkeletonCard>;

const meta: Meta<typeof ResourceSkeletonCard> = {
  title: 'Cards/ResourceSkeletonCard',
  component: ResourceSkeletonCard,
  args: { numberOfSkeletons: 10 },
};

export default meta;

export const Default: ResourceSkeletonCardStoryType = {
  render: args => <ResourceSkeletonCard {...args} />,
};
