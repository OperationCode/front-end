import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
 withKnobs, boolean, select, text 
} from '@storybook/addon-knobs';

import Alert from '../Alert';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Alert
        isOpen={boolean('isOpen', true)}
        onClose={action('onClose for Alert')}
        type={select('type', ['error', 'success', 'warning'])}
      >
        {text('children', 'PropTypes.string or .node')}
      </Alert>
    )),
  );
