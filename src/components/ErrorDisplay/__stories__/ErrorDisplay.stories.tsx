import type { Meta, StoryObj } from '@storybook/nextjs';
import ErrorDisplay from '../ErrorDisplay';

const meta: Meta<typeof ErrorDisplay> = {
  title: 'ErrorDisplay',
  component: ErrorDisplay,
};
export default meta;
type Story = StoryObj<typeof ErrorDisplay>;

export const Default: Story = {};

export const NotFound: Story = {
  args: { statusCode: 404 },
};

export const ServerError: Story = {
  args: { statusCode: 500 },
};
