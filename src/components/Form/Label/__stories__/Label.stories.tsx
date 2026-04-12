import type { Meta, StoryObj } from '@storybook/nextjs';
import Label from '../Label';

const meta: Meta<typeof Label> = {
  title: 'Forms/FormLabel',
  component: Label,
  args: { children: 'Field Label' },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Hidden: Story = {
  args: {
    isHidden: true,
    children: 'This label is screen-reader only',
  },
};
