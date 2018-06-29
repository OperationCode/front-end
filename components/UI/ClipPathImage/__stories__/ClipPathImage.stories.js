import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ClipPathImage from '../ClipPathImage';

storiesOf('Single-Purpose/ClipPathImage', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ClipPathImage
      altText={text('altText', "David Molina's lovely face")}
      href={text('href', '')}
      imageSource={text('imageSource', 'https://operationcode.org/static/media/Family-1.1383.jpg')}
      title={text('title', 'Clip Path Image')}
    />
  ));
