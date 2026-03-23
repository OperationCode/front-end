import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import Alert from '../Alert';

type AlertStoryType = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  args: {
    onClose: fn(),
  },
};

export default meta;

const AlertStoryTemplate: AlertStoryType = {
  render: (args) => <Alert {...args} />,
};

export const ErrorAlert: AlertStoryType = {
  ...AlertStoryTemplate,
  args: {
    children: 'Error Alert JSX or Text',
    type: 'error',
  },
};

export const SuccessAlert: AlertStoryType = {
  ...AlertStoryTemplate,
  args: {
    children: 'Success Alert JSX or Text',
    type: 'success',
  },
};

export const WarningAlert: AlertStoryType = {
  ...AlertStoryTemplate,
  args: {
    children: 'Warning Alert JSX or Text',
    type: 'warning',
  },
};
