import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Drawer from '../Drawer';

storiesOf('Common/Drawer', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Drawer isVisible={boolean('isVisible', false)}>
      {text('children', 'Only visible on Tablet view port size and under')}
    </Drawer>
  ));
