import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CloseButton from '../CloseButton';

export default {
  title: 'CloseButton',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <CloseButton
    onClick={action('Button clicked!')}
    disabled={boolean('disabled', false)}
    theme={select('theme', ['primary', 'secondary', 'white'], 'secondary')}
  />
);
