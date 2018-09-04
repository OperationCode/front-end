import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ImageCard from '../ImageCard';

storiesOf('Cards/ImageCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ImageCard
      alt={text('alt', 'Image Card')}
      imageSource={text(
        'imageSource',
        'https://operationcode.org/static/media/ThinkstockPhotos-489787502.812e.jpg',
      )}
    >
      <p>{text('children', 'PropTypes.node')}</p>
    </ImageCard>
  ));
