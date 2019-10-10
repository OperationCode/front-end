import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import ProgressIndicator from '../ProgressIndicator';

storiesOf('ProgressIndicator', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => <ProgressIndicator>{text('children', 'string or .node')}</ProgressIndicator>),
  );
