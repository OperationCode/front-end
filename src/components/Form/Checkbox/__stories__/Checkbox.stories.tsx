import type { Meta, StoryObj } from '@storybook/nextjs';
import Checkbox from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    name: 'terms',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Cannot change this',
    name: 'disabled',
    isDisabled: true,
  },
};
