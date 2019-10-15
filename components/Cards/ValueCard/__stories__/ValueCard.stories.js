import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ValueCard from '../ValueCard';

export default {
  title: 'Cards/ValueCard',
  decorators: [withKnobs],
};

export const Default = () => (
  <ValueCard
    name={text('name', 'Community')}
    description={text(
      'description',
      'We look out for the people to our left and right, and always keep a hand free to help...',
    )}
  />
);
