import React from 'react';
import { storiesOf } from '@storybook/react';
import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

storiesOf('HeroBanner', module).add('default', () => (
  <HeroBanner
    title="Hero Banner"
    imageSrc={`${s3}heroBanners/churchill.jpg`}
  />
));
