import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Common/Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      fullWidth={boolean('fullWidth', false)}
      href={text('href', '')}
      onClick={action('Button Clicked!')}
      tabIndex={number('tabIndex', 0)}
      theme={select('theme', ['primary', 'secondary', 'slate'])}
    >
      {text('children', 'Click Me! (PropTypes.node)')}
    </Button>
  ));
