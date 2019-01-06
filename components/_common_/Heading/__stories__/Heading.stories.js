import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
<<<<<<< HEAD
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
=======
import {
 withKnobs, boolean, select, text 
} from '@storybook/addon-knobs';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

import Heading from '../Heading';

storiesOf('Common/Heading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Heading
        id={text('id', 'heading1')}
        hasHeadingLines={boolean('hasHeadingLines', true)}
<<<<<<< HEAD
        theme={select('theme', ['gray', 'slate', 'white'], 'gray')}
=======
        theme={select('theme', ['gray', 'secondary', 'white'], 'gray')}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      >
        {text('children', 'Heading Component')}
      </Heading>
    )),
  );
