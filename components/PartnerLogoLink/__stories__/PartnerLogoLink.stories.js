import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import PartnerLogoLink from '../PartnerLogoLink';

storiesOf('Common/PartnerLogoLink', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <PartnerLogoLink>{text('children', 'PropTypes.string or .node')}</PartnerLogoLink>
    )),
  );
