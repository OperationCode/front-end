import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      href={text('href', '')}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('Button Clicked!')}
      isScrollLink={boolean('isScrollLink', false)}
      tabIndex={number('tabIndex', 0)}
      theme={select('theme', ['primary', 'secondary', 'gray'])}
    >
      {text('children', 'Click Me!')}
    </Button>
  ));
