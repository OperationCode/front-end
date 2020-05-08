import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import ReCaptcha from '../ReCaptcha';

storiesOf('ReCaptcha', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => <ReCaptcha>{text('children', 'string or .node')}</ReCaptcha>),
  );
