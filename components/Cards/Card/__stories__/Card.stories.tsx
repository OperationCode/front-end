import { Meta, StoryObj } from '@storybook/react';
import { descriptions } from 'common/constants/descriptions';
import Card from '../Card';

type CardStoryType = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'Cards/Card',
  component: Card,
  args: {
    children: descriptions.medium,
  },
};

export default meta;

export const Default: CardStoryType = {
  render: args => <Card {...args} />,
};
