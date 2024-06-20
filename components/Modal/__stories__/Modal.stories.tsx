import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { isChromatic } from 'chromatic/isChromatic';
import { Modal } from '../Modal';
import { descriptions } from '@/common/constants/descriptions';
import { Button } from '@/components/Buttons/Button/Button';

type ModalStoryType = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
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

export const Default: ModalStoryType = {
  render: args => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(args.isOpen);

    return (
      <>
        <Button onClick={() => setIsDemoModalOpen(true)}>Open modal</Button>

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

export const NonDismissableModal: ModalStoryType = {
  ...Default,
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
