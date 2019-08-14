import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Accordion from '../Accordion';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Accordion
        title={text('title', 'Test Title')}
        content={text('content', 'Test Content!!!')}
        accessibilityId="1"
      />
    )),
  );
