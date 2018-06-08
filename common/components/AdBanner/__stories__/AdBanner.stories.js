import React from 'react';
import { storiesOf } from '@storybook/react';

import AdBanner from '../AdBanner';

storiesOf('AdBanner', module).add('default', () => (
  <AdBanner
    altText="Logo for AutoGravity"
    imageSource="http://speedlux.com/wp-content/uploads/2017/02/AutoGravity-logo-1.png"
    link="https://autogravity.com"
  >
    Shameless plug for AutoGravity
  </AdBanner>
));
