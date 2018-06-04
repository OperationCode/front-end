import React from 'react';
import { storiesOf } from '@storybook/react';

import HeroBanner from '../HeroBanner';

storiesOf('HeroBanner', module).add('default', () => (
  <HeroBanner title="Hero Banner" imageSrc="/static/images/Family1.jpg" />
));
