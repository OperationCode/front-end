import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Router from 'next/router';

import OutboundLink from '../OutboundLink';

storiesOf('Common/OutboundLink', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <OutboundLink
        analyticsEventLabel={text('analyticsEventLabel', 'White House Official Website')}
        hasIcon={boolean('hasIcon', true)}
        href={text('href', 'https://whitehouse.gov')}
        router={Router}
      >
        {text('children', 'White House Official Website')}
      </OutboundLink>
    )),
  );
