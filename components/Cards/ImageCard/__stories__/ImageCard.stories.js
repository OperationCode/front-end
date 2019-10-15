import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import ImageCard from '../ImageCard';

export default {
  title: 'Cards/ImageCard',
  decorators: [withKnobs],
};

export const Default = () => (
  <ImageCard
    alt={text('alt', 'Image Card')}
    imageSource={text(
      'imageSource',
      'https://operationcode.org/public/static/media/ThinkstockPhotos-489787502.812e.jpg',
    )}
    isImageFirst={boolean('isImageFirst', true)}
  >
    <p>{text('children', 'PropTypes.node')}</p>
  </ImageCard>
);
