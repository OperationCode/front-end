import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import OutboundLink from '../OutboundLink';

storiesOf('Common/OutboundLink', module)
  .addDecorator(withKnobs)
  .add('default',
    withInfo()(() => (
      <OutboundLink
        analyticsEventLabel={text('analyticsEventLabel', 'White House Official Website')}
        hasIcon={boolean('hasIcon', true)}
        href={text('href', 'https://whitehouse.gov')}
        onClick={action('Button Clicked!')}
        onKeyDown={action('Enter key pressed!')}
      >
        {text('children', 'White House Official Website')}
      </OutboundLink>
    )));
