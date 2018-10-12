import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Partners from '../Partners';

storiesOf('Common/Partners', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => <Partners>{text('children', 'PropTypes.string or .node')}</Partners>),
  );
