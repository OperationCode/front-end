import type { StoryFn } from '@storybook/react';
import { descriptions } from 'common/constants/descriptions';
import FlatCard from '../FlatCard';

export default {
  component: FlatCard,
  title: 'Cards/FlatCard',
};

interface FlatCardArgs {
  children: string;
  image: {
    source: string;
    alt: string;
  };
}

const Template: StoryFn<FlatCardArgs> = args => <FlatCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: descriptions.long,
  image: {
    source: '',
    alt: '',
  },
};
