import type { Meta, StoryObj } from '@storybook/nextjs';
import { InlineLoadingSpinner } from '../../InlineLoadingSpinner';

const meta: Meta<typeof InlineLoadingSpinner> = {
  title: 'InlineLoadingSpinner',
  component: InlineLoadingSpinner,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center rounded-md bg-gray-800 p-8">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof InlineLoadingSpinner>;

export const Default: Story = {};
