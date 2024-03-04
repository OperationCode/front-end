import { Meta, StoryObj } from '@storybook/react';
import { descriptions } from 'common/constants/descriptions';
import { s3 } from 'common/constants/urls';
import ImageCard from '../ImageCard';

type ImageCardPropsType = StoryObj<typeof ImageCard>;

const meta: Meta<typeof ImageCard> = {
  title: 'Cards/ImageCard',
  component: ImageCard,
  args: {
    alt: 'Image Card',
    children: descriptions.long,
    imageSource: `${s3}redesign/heroBanners/about.jpg`,
  },
};

export default meta;

export const Default: ImageCardPropsType = {
  render: args => <ImageCard {...args} />
};
