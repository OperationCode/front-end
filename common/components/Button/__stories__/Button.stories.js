import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

storiesOf('Button', module).add('default', () => (
  <Button
    onClick={() => {
      console.log('hello there'); // eslint-disable-line no-console
    }}
  >
    Primary Button
  </Button>
));
