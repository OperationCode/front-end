import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../Card';

storiesOf('Card', module)
  .add('default', () => (
    <Card
      cardHeaderClassName=""
      cardContentClassName=""
      cardFooterClassName=""
      className=""
      headerContent=""
      footerContent=""
    >
      This is the card content
    </Card>
  ))
  .add('with header', () => (
    <Card
      cardHeaderClassName=""
      cardContentClassName=""
      cardFooterClassName=""
      className=""
      headerContent="This is the header!"
      footerContent=""
    >
      This is the card content
    </Card>
  ))
  .add('with footer', () => (
    <Card
      cardHeaderClassName=""
      cardContentClassName=""
      cardFooterClassName=""
      className=""
      headerContent=""
      footerContent="This is the footer!"
    >
      This is the card content
    </Card>
  ))
  .add('with header and footer', () => (
    <Card
      cardHeaderClassName=""
      cardContentClassName=""
      cardFooterClassName=""
      className=""
      headerContent="This is the header!"
      footerContent="This is the footer!"
    >
      This is the card content
    </Card>
  ));
