import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import ScreenReaderOnly from '../ScreenReaderOnly';

storiesOf('ScreenReaderOnly', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <ScreenReaderOnly>
        {text('children', 'This content is never displayed, but it is rendered')}
      </ScreenReaderOnly>
    )),
  );
