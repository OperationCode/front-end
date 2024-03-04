import { Meta, StoryObj } from '@storybook/react';
import { descriptions } from 'common/constants/descriptions';
import ResourceCard from '../ResourceCard';

type ResourceCardStoryType = StoryObj<typeof ResourceCard>;

const meta: Meta<typeof ResourceCard> = {
  title: 'Cards/ResourceCard',
  component: ResourceCard,
  args: {
    href: 'https://google.com/',
    name: 'Name of resource',
  },
};

export default meta;

export const Default: ResourceCardStoryType = {
  render: args => <ResourceCard {...args} />,
};

export const WithLongName: ResourceCardStoryType = {
  ...Default,
  args: {
    name: descriptions.medium,
  },
};

export const WithVotes: ResourceCardStoryType = {
  ...Default,
  args: {
    downvotes: 25,
    upvotes: 25,
  },
};
