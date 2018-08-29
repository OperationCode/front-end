import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ValueCard from '../ValueCard';

storiesOf('Single-Purpose/Cards/ValueCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ValueCard
      name=
      {text('name', 'Community')}
      description=
      {text(
        'description',
        'We look out for the people to our left and right, and always keep a hand free to help...',
      )}
    />

  ));
