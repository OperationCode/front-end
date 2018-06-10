import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, object, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      className={object('className', {
        'some-CSS-attribute': '',
      })}
      theme={select('theme', ['primary', 'secondary', 'gray'])}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('Button Clicked!')}
      tabIndex={number('tabIndex', 0)}
    >
      {text('children', 'Click Me!')}
    </Button>
  ));
