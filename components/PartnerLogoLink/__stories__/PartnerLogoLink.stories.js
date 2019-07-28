import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';

import PartnerLogoLink from '../PartnerLogoLink';

storiesOf('PartnerLogoLink', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <PartnerLogoLink
        logoSource={text('logoSource', `${s3}partnerLogos/github.png`)}
        name={text('name', 'GitHub')}
        url={text('url', 'https://github.com')}
      />
    )),
  );
