import { useState } from 'react';
import isChromatic from 'chromatic/isChromatic';

import { descriptions } from 'common/constants/descriptions';
import Button from 'components/Buttons/Button/Button';
import Modal from '../Modal';

export const Default = {
  render: args => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(args.isOpen);

    return (
      <>
        <Button onClick={() => setIsDemoModalOpen(true)}>Open Modal</Button>

        <Modal
          {...args}
          isOpen={isDemoModalOpen}
          onRequestClose={prevValue => setIsDemoModalOpen(!prevValue)}
        />
      </>
    );
  },
  args: {
    isOpen: !!isChromatic(),
    children: descriptions.medium,
    screenReaderLabel: 'You have completed the form.',
  },
};

export const NonDismissableModal = {
  render: args => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(args.isOpen);

    return (
      <>
        <Button onClick={() => setIsDemoModalOpen(true)}>Open Modal</Button>

        <Modal
          {...args}
          isOpen={isDemoModalOpen}
          onRequestClose={prevValue => setIsDemoModalOpen(!prevValue)}
        />
      </>
    );
  },
  args: {
    canClose: false,
    isOpen: false,
    children: (
      <>
        <p>
          This modal will not close once opened. You must reload the page to reset the state in
          Storybook.
        </p>
        <p>{descriptions.medium}</p>
      </>
    ),
    screenReaderLabel: 'You have completed the form.',
  },
};

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    docs: {
      autodocs: false,
      disable: true,
      page: null,
    },
  },
};

export default meta;
