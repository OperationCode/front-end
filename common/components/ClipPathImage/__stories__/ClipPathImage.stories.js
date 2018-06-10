import React from 'react';
import { storiesOf } from '@storybook/react';

import ClipPathImage from '../ClipPathImage';

storiesOf('ClipPathImage', module).add('default', () => (
  <ClipPathImage
    altText="David Molina's lovely face"
    image="https://operationcode.org/static/media/Family-1.1383.jpg"
    link=""
    title="Clip Path Image"
  />
));
