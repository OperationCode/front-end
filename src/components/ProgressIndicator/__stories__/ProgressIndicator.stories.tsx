import type { Meta, StoryObj } from '@storybook/nextjs';
import ProgressIndicator from '../ProgressIndicator';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
};
export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

export const Default: Story = {
  args: {
    stepNumber: 2,
    totalSteps: 5,
  },
};

export const Complete: Story = {
  args: {
    stepNumber: 5,
    totalSteps: 5,
  },
};

export const JustStarted: Story = {
  args: {
    stepNumber: 0,
    totalSteps: 5,
  },
};
