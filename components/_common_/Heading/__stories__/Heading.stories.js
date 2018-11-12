import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
 withKnobs, boolean, select, text 
} from '@storybook/addon-knobs';

import Heading from '../Heading';

storiesOf('Common/Heading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Heading
        id={text('id', 'heading1')}
        hasHeadingLines={boolean('hasHeadingLines', true)}
        theme={select('theme', ['gray', 'slate', 'white'], 'gray')}
      >
        {text('children', 'Heading Component')}
      </Heading>
    )),
  );
