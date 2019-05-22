import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import podcasts from '../podcasts';

storiesOf('podcasts', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => <podcasts>{text('children', 'PropTypes.string or .node')}</podcasts>),
  );
