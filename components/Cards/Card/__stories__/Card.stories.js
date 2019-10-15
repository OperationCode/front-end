import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Card from '../Card';

export default {
  title: 'Cards/Card',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Card hasAnimationOnHover={boolean('hasAnimationOnHover', false)}>
    {text('children', 'This is the card content...')}
  </Card>
);
