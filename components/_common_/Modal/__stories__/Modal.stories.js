import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Modal from '../Modal';

storiesOf('Common/Modal', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Modal
        hasCloseButton={boolean('hasCloseButton', true)}
        isOpen={boolean('isOpen', false)}
        onRequestClose={action('onRequestClose function called')}
        screenReaderLabel={text(
          'screenReaderLabel',
          'This is how the modal will be declared to screen readers',
        )}
      >
        {text('children', 'Modal text.')}
      </Modal>
    )),
  );
