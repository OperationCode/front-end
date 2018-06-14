import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      fullWidth={boolean('fullWidth', false)}
      hasExternalLinkIcon={boolean('hasExternalLinkIcon', true)}
      href={text('href', '')}
      isScrollLink={boolean('isScrollLink', false)}
      onClick={action('Button Clicked!')}
      tabIndex={number('tabIndex', 0)}
      theme={select('theme', ['primary', 'secondary', 'gray'])}
    >
      {text('children', 'Click Me!')}
    </Button>
  ));
