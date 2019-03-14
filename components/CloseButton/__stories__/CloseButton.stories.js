import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CloseButton from '../CloseButton';

storiesOf('CloseButton', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <CloseButton
        onClick={action('Button clicked!')}
        disabled={boolean('disabled', false)}
        theme={select('theme', ['primary', 'secondary', 'white'], 'secondary')}
      />
    )),
  );
