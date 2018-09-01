import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ImageCard from '../ImageCard';

storiesOf('Cards/ImageCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ImageCard
      buttonText={text('buttonText', 'Click Me!')}
      cardText={text('cardText', 'buttonText is only shown/necessary when `link` exists')}
      imageSource={text(
        'imageSource',
        'https://operationcode.org/static/media/ThinkstockPhotos-489787502.812e.jpg',
      )}
      link={text('link', 'https://google.com')}
      title={text('title', 'Image Card')}
    />
  ));
