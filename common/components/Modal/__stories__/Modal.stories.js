import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Modal from '../Modal';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Modal
      isOpen={boolean('isOpen', false)}
      onRequestClose={action('onRequestClose function called')}
      title={text('title', 'Modal')}
    >
      {text('children', 'Modal text.')}
    </Modal>
  ));
