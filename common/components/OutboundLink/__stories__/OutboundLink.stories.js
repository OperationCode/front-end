import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import OutboundLink from '../OutboundLink';

storiesOf('OutboundLink', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <OutboundLink
      analyticsEventLabel={text('analyticsEventLabel', 'White House Official Website')}
      href={text('href', 'https://whitehouse.gov')}
    >
      {text('children', 'White House Official Website')}
    </OutboundLink>
  ));
