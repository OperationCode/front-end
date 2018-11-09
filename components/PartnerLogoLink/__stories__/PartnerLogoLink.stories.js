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
      <PartnerLogoLink
        logo={text(
          'logo',
          'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
        )}
        name={text('name', 'GitHub')}
        url={text('url', 'https://github.com')}
      />
    )),
  );
