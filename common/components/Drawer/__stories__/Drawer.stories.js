import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Drawer from '../Drawer';

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Drawer isVisible={boolean('isVisible', false)}>
      {text('children', 'Click Me! (PropType.any)')}
    </Drawer>
  ));
