import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
 withKnobs, boolean, select, text 
} from '@storybook/addon-knobs';
import LinkButton from '../LinkButton';

storiesOf('LinkButton', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <LinkButton
        href={text('href', 'https://tests.com')}
        analyticsEventLabel={text(
          'analyticsEventLabel',
          'When present, makes LinkButton behave as outbound link',
        )}
        fullWidth={boolean('fullWidth', false)}
        theme={select('theme', ['primary', 'secondary'])}
      >
        {text('children', 'Click Me!')}
      </LinkButton>
    )),
  );
