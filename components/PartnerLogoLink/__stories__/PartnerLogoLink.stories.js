import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import PartnerLogoLink from '../PartnerLogoLink';

storiesOf('PartnerLogoLink', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <PartnerLogoLink
        logoSource={text(
          'logoSource',
          'https://s3.amazonaws.com/operationcode-assets/partnerLogos/github.png',
        )}
        name={text('name', 'GitHub')}
        url={text('url', 'https://github.com')}
      />
    )),
  );
