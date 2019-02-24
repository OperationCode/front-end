import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

storiesOf('Common/HeroBanner', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <HeroBanner
        backgroundImageSource={text('imageSource', `${s3}heroBanners/stock_family-2.jpg`)}
        isFullViewportHeight={boolean('isFullViewportHeight', false)}
        title={text('title', 'Hero Banner')}
      >
        {text('children', '')}
      </HeroBanner>
    )),
  );
