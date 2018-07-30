import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Section from '../Section';

storiesOf('Common/Section', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Section
        hasHeadingLines={boolean('hasHeadingLines', true)}
        id={text('id', 'Used as a reference point for scroll anchors')}
        theme={select('theme', ['gray', 'grayLight', 'slate', 'white'], 'gray')}
        title={text('title', 'Section Title')}
      >
        {text('children', 'Section content!')}
      </Section>
    )),
  );
