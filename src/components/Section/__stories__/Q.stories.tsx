import type { Meta, StoryObj } from '@storybook/nextjs';
import Q from '../Q';

const meta: Meta<typeof Q> = {
  title: 'Q',
  component: Q,
};
export default meta;
type Story = StoryObj<typeof Q>;

export const Default: Story = {
  args: {
    title: 'What is Operation Code?',
    children: (
      <p>
        Operation Code is a 501(c)(3) veteran-led nonprofit that helps military community members
        grow in their tech careers.
      </p>
    ),
  },
};
