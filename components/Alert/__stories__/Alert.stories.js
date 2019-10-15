import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Alert from '../Alert';

export default {
  title: 'Alert',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Alert
    onClose={action('onToggle for Alert')}
    type={select('type', ['error', 'success', 'warning'], 'error')}
  >
    {text('children', 'Some JSX or string here...')}
  </Alert>
);
