import { useState } from 'react';
import { descriptions } from 'common/constants/descriptions';
import Modal from '../Modal';

export const Default = {
  render: args => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(args.isOpen);

    return (
      <Modal
        {...args}
        isOpen={isDemoModalOpen}
        onRequestClose={prevValue => setIsDemoModalOpen(!prevValue)}
      />
    );
  },
  args: {
    isOpen: true,
    children: descriptions.medium,
    screenReaderLabel: 'You have completed the form.',
  },
};

export const NoCloseOnOverlayClick = {
  render: args => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(args.isOpen);

    return (
      <Modal
        {...args}
        isOpen={isDemoModalOpen}
        onRequestClose={prevValue => setIsDemoModalOpen(!prevValue)}
      />
    );
  },
  args: {
    shouldCloseOnOverlayClick: false,
    isOpen: true,
    children: descriptions.medium,
    screenReaderLabel: 'You have completed the form.',
  },
};

const meta = {
  title: 'Modal',
  component: Modal,
};

export default meta;
