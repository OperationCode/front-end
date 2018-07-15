import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import SuccessStory from '../SuccessStory';

storiesOf('Single-Purpose/SuccessStory', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SuccessStory
      imageSource={text('imageSource', 'https://kylemh.com/public/img/me.jpg')}
      quote={text(
        'quote',
        'Operation Code is literally the greatest thing since sliced bread and Taco Bell.',
      )}
      title={text('title', 'Kyle Holmberg')}
    />
  ));
