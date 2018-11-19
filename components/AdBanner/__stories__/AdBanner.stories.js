import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { s3 } from 'common/constants/urls';

import AdBanner from '../AdBanner';

storiesOf('AdBanner', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <AdBanner
      altText={text('altText', 'Logo for Topcoder')}
      imageSource={text('imageSource', `${s3}partnerLogos/logo_topcoder_with_name.svg`)}
      href={text('href', 'http://op.co.de/topcoder-veterans')}
    >
      {text('children', 'PropTypes.any')}
    </AdBanner>
  ));
