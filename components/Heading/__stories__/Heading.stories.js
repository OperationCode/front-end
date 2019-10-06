import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Heading from '../Heading';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Heading
        text="Test Heading"
        id={text('id', 'heading1')}
        hasHeadingLines={boolean('hasHeadingLines', true)}
      >
        {text('children', 'Heading Component')}
      </Heading>
    )),
  );
