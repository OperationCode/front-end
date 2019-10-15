import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import ScreenReaderOnly from '../ScreenReaderOnly';

export default {
  title: 'ScreenReaderOnly',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <ScreenReaderOnly>
    {text('children', 'This content is never displayed, but it is rendered')}
  </ScreenReaderOnly>
);
