import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import SuccessStory from '../SuccessStory';

export default {
  title: 'SuccessStory',
  decorators: [withKnobs],
};

export const Default = () => (
  <SuccessStory
    imageSource={text('imageSource', 'https://kylemh.com/public/img/me.jpg')}
    quote={text(
      'quote',
      'Operation Code is literally the greatest thing since sliced bread and Taco Bell.',
    )}
    title={text('title', 'Kyle Holmberg')}
  />
);
