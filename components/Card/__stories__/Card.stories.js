import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Card from '../Card';

storiesOf('Common/Card', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Card hasAnimationOnHover={boolean('hasAnimationOnHover', false)}>
        {text('children', 'This is the card content...')}
      </Card>
    )),
  );
