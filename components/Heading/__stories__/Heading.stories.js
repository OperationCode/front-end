import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import Heading from '../Heading';

export default {
  title: 'Heading',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Heading
    hasHashLink={boolean('hasHashLink', true)}
    hasTitleUnderline={boolean('hasTitleUnderline', false)}
    headingLevel={number('headingLevel', 2)}
    text={text('text', 'Test Heading')}
  />
);
