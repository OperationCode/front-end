import React from 'react';
import { storiesOf } from '@storybook/react';
import OutboundLink from '../OutboundLink';

storiesOf('OutboundLink', module).add('default', () => (
  <OutboundLink
    analyticsEventLabel="White House Official Website"
    href="https://whitehouse.gov"
  >
    White House Official Website
  </OutboundLink>
));
