import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import OutboundLink from '../OutboundLink';

export default {
  title: 'OutboundLink',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <OutboundLink
    analyticsEventLabel={text('analyticsEventLabel', 'White House Official Website')}
    hasIcon={boolean('hasIcon', true)}
    href={text('href', 'https://whitehouse.gov')}
  >
    {text('children', 'White House Official Website')}
  </OutboundLink>
);
