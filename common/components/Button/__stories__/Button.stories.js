import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      theme={select('theme', ['primary', 'secondary', 'gray'])}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('Button Clicked!')}
      tabIndex={number('tabIndex', 0)}
    >
      {text('children', 'Click Me!')}
    </Button>
  ));
