import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from '../Card';
import CardHeader from '../CardHeader';
import CardFooter from '../CardFooter';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Card>{text('children', 'This is the card content (PropTypes.node)')}</Card>
  ))
  .add('with header', () => (
    <Card>
      <CardHeader>
        {text('CardHeader children', 'This is the card header (PropTypes.node)')}
      </CardHeader>
      {text('children', 'This is the card content (PropTypes.node)')}
    </Card>
  ))
  .add('with footer', () => (
    <Card>
      {text('children', 'This is the card content (PropTypes.node)')}
      <CardFooter>
        {text('CardFooter children', 'This is the card footer (PropTypes.node)')}
      </CardFooter>
    </Card>
  ))
  .add('with header and footer', () => (
    <Card>
      <CardHeader>
        {text('CardHeader children', 'This is the card header (PropTypes.node)')}
      </CardHeader>
      {text('children', 'This is the card content (PropTypes.node)')}
      <CardFooter>
        {text('CardFooter children', 'This is the card footer (PropTypes.node)')}
      </CardFooter>
    </Card>
  ));
