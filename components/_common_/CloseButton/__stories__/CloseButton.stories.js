import React from 'react';
import { storiesOf } from '@storybook/react';
<<<<<<< HEAD
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
=======
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

import CloseButton from '../CloseButton';

storiesOf('Common/CloseButton', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <CloseButton
<<<<<<< HEAD
        disabled={boolean('disabled', false)}
        onClick={action('onClick', 'CloseButton clicked!')}
=======
        onClick={action('Button clicked!')}
        disabled={boolean('disabled', false)}
        theme={select('theme', ['primary', 'secondary', 'white'], 'secondary')}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      />
    )),
  );
