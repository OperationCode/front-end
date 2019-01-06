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

import Section from '../Section';

storiesOf('Common/Section', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Section
        hasHeadingLines={boolean('hasHeadingLines', true)}
        id={text('id', 'Used as a reference point for scroll anchors')}
<<<<<<< HEAD
        theme={select('theme', ['gray', 'grayLight', 'mist', 'slate', 'white'], 'gray')}
=======
        theme={select('theme', ['gray', 'white', 'secondary'], 'gray')}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        title={text('title', 'Section Title')}
      >
        {text('children', 'Section content!')}
      </Section>
    )),
  );
