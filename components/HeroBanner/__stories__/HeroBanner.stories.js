import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import HeroBanner from '../HeroBanner';

export default {
  title: 'HeroBanner',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <HeroBanner
    backgroundImageSource={text('backgroundImageSource', '')}
    isFullViewportHeight={boolean('isFullViewportHeight', false)}
    title={text('title', 'Hero Banner')}
  >
    {text('children', '')}
  </HeroBanner>
);
