import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DonateSection from '../DonateSection';

storiesOf('DonateSection', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DonateSection
      theme={select('theme', ['primary', 'secondary', 'gray'])}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('DonateSection Clicked!')}
      tabIndex={number('tabIndex', 0)}
    >
      {text('children', 'Click Me!')}
    </DonateSection>
  ));
