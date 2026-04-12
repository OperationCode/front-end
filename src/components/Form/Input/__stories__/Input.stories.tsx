import type { Meta, StoryObj } from '@storybook/nextjs';
import Input from '../Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'you@example.com',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    name: 'disabled',
    isDisabled: true,
    placeholder: 'Cannot edit',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    name: 'email-error',
    type: 'email',
    error: 'Invalid email address',
    isTouched: true,
  },
};

export const Valid: Story = {
  args: {
    label: 'Name',
    name: 'name-valid',
    defaultValue: 'Kyle',
    isTouched: true,
  },
};

export const HiddenLabel: Story = {
  args: {
    label: 'Search',
    name: 'search',
    isLabelHidden: true,
    placeholder: 'Search...',
  },
};
