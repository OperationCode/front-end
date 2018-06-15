import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Heading from '../Heading';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Heading
      id={text('id', 'heading1')}
      hasHeadingLines={boolean('hasHeadingLines', true)}
      theme={select('theme', ['dark', 'white'], 'dark')}
    >
      {text('children', 'Heading Component')}
    </Heading>
  ));
