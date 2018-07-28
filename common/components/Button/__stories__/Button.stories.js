import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Common/Button', module)
  .addDecorator(withKnobs)
  .add('default',
    withInfo()(() => (
      <Button
        disabled={boolean('disabled', false)}
        fullWidth={boolean('fullWidth', false)}
        href={text('href', '')}
        onClick={action('Button Clicked!')}
        onKeyDown={action('Enter key pressed!')}
        tabIndex={number('tabIndex', 0)}
        theme={select('theme', ['primary', 'secondary', 'slate'])}
      >
        {text('children', 'Click Me!')}
      </Button>
    )),);
