import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import HeroBanner from '../HeroBanner';

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <HeroBanner
        backgroundImageSource={text('backgroundImageSource', '')}
        isFullViewportHeight={boolean('isFullViewportHeight', false)}
        title={text('title', 'Hero Banner')}
      >
        {text('children', '')}
      </HeroBanner>
    )),
  );
