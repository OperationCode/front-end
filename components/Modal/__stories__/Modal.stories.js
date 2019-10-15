import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Modal from '../Modal';

export default {
  title: 'Modal',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Modal
    isOpen={boolean('isOpen', false)}
    onRequestClose={action('onRequestClose function called')}
    screenReaderLabel={text(
      'screenReaderLabel',
      'This is how the modal will be declared to screen readers',
    )}
  >
    {text('children', 'Modal text.')}
  </Modal>
);
