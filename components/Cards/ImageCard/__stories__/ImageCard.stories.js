import React from 'react';
import { storiesOf } from '@storybook/react';
<<<<<<< HEAD
import { withKnobs, text } from '@storybook/addon-knobs';
=======
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

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
<<<<<<< HEAD
=======
      isImageFirst={boolean('isImageFirst', true)}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    >
      <p>{text('children', 'PropTypes.node')}</p>
    </ImageCard>
  ));
