import React from 'react';

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
  children: <p>ImageCard content...</p>,
  imageSource:
    'https://operation-code-assets.s3.us-east-2.amazonaws.com/redesign/heroBanners/about.jpg',
};
