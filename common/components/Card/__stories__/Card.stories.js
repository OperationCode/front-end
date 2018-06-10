import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import Card from '../Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Card
      className={object('className', {
        'some-css-attribute': '',
      })}
    >
      {text('children', 'This is the card content (PropTypes.any)')}
    </Card>
  ));
