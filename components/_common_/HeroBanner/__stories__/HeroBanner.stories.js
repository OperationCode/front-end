import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
<<<<<<< HEAD
import { withKnobs, text } from '@storybook/addon-knobs';
=======
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

storiesOf('Common/HeroBanner', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <HeroBanner
<<<<<<< HEAD
=======
        isFullViewHeight={boolean('isFullViewHeight', false)}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        imageSource={text('imageSource', `${s3}heroBanners/stock_family-2.jpg`)}
        title={text('title', 'Hero Banner')}
      >
        {text('children', '')}
      </HeroBanner>
    )),
  );
