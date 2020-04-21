import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';

import ProgressIndicator from '../ProgressIndicator';

storiesOf('ProgressIndicator', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <ProgressIndicator
        stepNumber={number('stepNumber', 0)}
        totalSteps={number('totalSteps', 3)}
      />
    )),
  )
  .add(
    '1 of 3',
    withInfo()(() => (
      <ProgressIndicator
        stepNumber={number('stepNumber', 1)}
        totalSteps={number('totalSteps', 3)}
      />
    )),
  )
  .add(
    '2 of 3',
    withInfo()(() => (
      <ProgressIndicator
        stepNumber={number('stepNumber', 2)}
        totalSteps={number('totalSteps', 3)}
      />
    )),
  )
  .add(
    '3 of 3',
    withInfo()(() => (
      <ProgressIndicator
        stepNumber={number('stepNumber', 3)}
        totalSteps={number('totalSteps', 3)}
      />
    )),
  );
