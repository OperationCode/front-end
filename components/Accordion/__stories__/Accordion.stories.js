import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Accordion from '../Accordion';

export default {
  title: 'Accordion',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Accordion
    title={text('title', 'Test Title')}
    content={text('content', 'Test Content!!!')}
    accessibilityId="1"
  />
);
