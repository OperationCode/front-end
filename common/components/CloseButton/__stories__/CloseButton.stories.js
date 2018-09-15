import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CloseButton from '../CloseButton';

storiesOf('Common/CloseButton', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <CloseButton
        disabled={boolean('disabled', false)}
        onClick={action('onClick', 'CloseButton clicked!')}
      />
    )),
  );
