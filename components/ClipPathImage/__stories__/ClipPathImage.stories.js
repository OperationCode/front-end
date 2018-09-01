import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import ClipPathImage from '../ClipPathImage';

storiesOf('Single-Purpose/ClipPathImage', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ClipPathImage
      altText={text('altText', 'A lovely family sitting around an iPad')}
      href={text('href', '')}
      imageSource={text('imageSource', 'https://operationcode.org/static/media/Family-1.1383.jpg')}
      theme={select('theme', ['primary', 'secondary', 'slate'])}
      title={text('title', 'Clip Path Image')}
    />
  ));
