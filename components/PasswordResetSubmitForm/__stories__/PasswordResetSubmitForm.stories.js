import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import PasswordResetSubmitForm from '../PasswordResetSubmitForm';

storiesOf('PasswordResetSubmitForm', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <PasswordResetSubmitForm>
        {text('children', 'string or .node')}
      </PasswordResetSubmitForm>
    )),
  );
