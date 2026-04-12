import type { Meta, StoryObj } from '@storybook/nextjs';
import { InlineLoadingSpinner } from '../../InlineLoadingSpinner';

const meta: Meta<typeof InlineLoadingSpinner> = {
  title: 'InlineLoadingSpinner',
  component: InlineLoadingSpinner,
};
export default meta;
type Story = StoryObj<typeof InlineLoadingSpinner>;

export const Default: Story = {};
