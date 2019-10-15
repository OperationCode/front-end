import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Drawer from '../Drawer';

export default {
  title: 'Drawer',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Drawer isVisible={boolean('isVisible', false)}>
    {text('children', 'Only visible on Tablet view port size and under')}
  </Drawer>
);
