import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import PasswordResetForm from '../PasswordResetForm';

storiesOf('PasswordResetForm', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <PasswordResetForm>
        {text('children', 'string or .node')}
      </PasswordResetForm>
    )),
  );
