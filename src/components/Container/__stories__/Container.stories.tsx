import type { Meta, StoryObj } from '@storybook/nextjs';
import Container from '../Container';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
};
export default meta;
type Story = StoryObj<typeof Container>;

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    children: <p>Secondary theme (default)</p>,
  },
};

export const White: Story = {
  args: {
    theme: 'white',
    children: <p>White theme</p>,
  },
};

export const Gray: Story = {
  args: {
    theme: 'gray',
    children: <p>Gray theme</p>,
  },
};
