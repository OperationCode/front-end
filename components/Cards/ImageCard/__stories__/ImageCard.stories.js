import React from 'react';

import { descriptions } from 'common/constants/descriptions';
import { s3 } from 'common/constants/urls';
import ImageCard from '../ImageCard';

export default {
  component: ImageCard,
  title: 'Cards/ImageCard',
};

const Template = arguments_ => <ImageCard {...arguments_} />;

// Default ImageCard supplied with only required args
export const Default = Template.bind({});
Default.args = {
  alt: 'Image Card',
  children: <p>{descriptions.long}</p>,
  imageSource: `${s3}redesign/heroBanners/about.jpg`,
};
