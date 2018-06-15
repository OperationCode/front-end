import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from '../Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Card>{text('children', 'This is the card content (PropTypes.node)')}</Card>
  ));
