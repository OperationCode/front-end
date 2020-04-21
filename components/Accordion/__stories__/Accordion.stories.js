import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs';

import Accordion from '../Accordion';
import FAQAccordion from '../FAQAccordion';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Accordion
        accessibilityId={text('accessibilityId', '1')}
        content={object('content', {
          headingChildren: <h5>Can be JSX</h5>,
          bodyChildren: <p>Can also be JSX</p>,
        })}
        hasAnimationOnHover={boolean('hasAnimationOnHover', false)}
      />
    )),
  )
  .add(
    'FAQAccordion',
    withInfo()(() => (
      <FAQAccordion
        accessibilityId={text('accessibilityId', '1')}
        content={text('content', 'Test Content!!!')}
        title={text('title', 'Test Title')}
      />
    )),
  );
