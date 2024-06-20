import { Meta, StoryObj } from '@storybook/react';
import { ValueCard } from '../ValueCard';
import { descriptions } from '@/common/constants/descriptions';

type ValueCardStoryType = StoryObj<typeof ValueCard>;

const meta: Meta<typeof ValueCard> = {
  title: 'Cards/ValueCard',
  component: ValueCard,
  args: {
    name: 'Card name',
    description: descriptions.short,
  },
};

export default meta;

export const Default: ValueCardStoryType = {
  render: args => <ValueCard {...args} />,
};

export const WithLongDescription: ValueCardStoryType = {
  ...Default,
  args: {
    description: descriptions.long,
  },
};
