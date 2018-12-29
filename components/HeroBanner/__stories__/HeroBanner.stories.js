import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import HeroBanner from '../HeroBanner';

storiesOf('Common/HeroBanner', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => <HeroBanner>{text('children', 'PropTypes.string or .node')}</HeroBanner>),
  );
