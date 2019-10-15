import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import LinkButton from '../LinkButton';

export default {
  title: 'LinkButton',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <LinkButton
    href={text('href', 'https://tests.com')}
    analyticsEventLabel={text(
      'analyticsEventLabel',
      'When present, makes LinkButton behave as outbound link',
    )}
    fullWidth={boolean('fullWidth', false)}
    theme={select('theme', ['primary', 'secondary'])}
  >
    {text('children', 'Click Me!')}
  </LinkButton>
);
