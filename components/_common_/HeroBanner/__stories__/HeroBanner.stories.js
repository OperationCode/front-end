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
        isFullViewHeight={boolean('isFullViewHeight', false)}
        imageSource={text('imageSource', `${s3}heroBanners/stock_family-2.jpg`)}
        title={text('title', 'Hero Banner')}
      >
        {text('children', '')}
      </HeroBanner>
    )),
  );
