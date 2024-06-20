import { Meta, StoryObj } from '@storybook/react';
import { SuccessStory } from '../SuccessStory';
import { descriptions } from '@/common/constants/descriptions';
import { s3 } from '@/common/constants/urls';

type SuccessStoryType = StoryObj<typeof SuccessStory>;

const meta: Meta<typeof SuccessStory> = {
  title: 'SuccesStory',
  component: SuccessStory,
  args: {
    title: 'Name of Person',
    imageSource: `${s3}headshots/david_molina.jpg`,
    quote: descriptions.long,
  },
};

export default meta;

export const Default: SuccessStoryType = {
  render: args => <SuccessStory {...args} />,
};
