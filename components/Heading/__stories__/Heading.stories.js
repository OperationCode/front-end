import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import Heading from '../Heading';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Heading
        hasHashLink={boolean('hasHashLink', true)}
        hasTitleUnderline={boolean('hasTitleUnderline', false)}
        headingLevel={number('headingLevel', 2)}
        text={text('text', 'Test Heading')}
      />
    )),
  );
