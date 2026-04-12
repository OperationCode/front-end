import type { Meta, StoryObj } from '@storybook/nextjs';
import { Alert, AlertTitle, AlertDescription } from '../alert';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args} variant="success">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Operation completed successfully.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args} variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Please review before proceeding.</AlertDescription>
    </Alert>
  ),
};
