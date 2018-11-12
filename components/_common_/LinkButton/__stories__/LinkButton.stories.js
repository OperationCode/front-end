import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import LinkButton from '../LinkButton';

storiesOf('Common/LinkButton', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <LinkButton href={text('href', 'https://someurl.com/')} isFilled={boolean('isFilled', false)}>
        {text('children', 'Click Me!')}
      </LinkButton>
    )),
  );
