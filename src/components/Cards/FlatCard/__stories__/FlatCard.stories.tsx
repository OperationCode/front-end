import type { Meta, StoryObj } from '@storybook/nextjs';
import FlatCard from '../FlatCard';

const meta: Meta<typeof FlatCard> = {
  title: 'Cards/FlatCard',
  component: FlatCard,
};
export default meta;
type Story = StoryObj<typeof FlatCard>;

export const Default: Story = {
  args: {
    header: 'Card Header',
    children: <p>Card body content goes here.</p>,
  },
};

export const WithButton: Story = {
  args: {
    header: 'With Action',
    children: <p>This card has a button.</p>,
    button: (
      <button className="rounded-sm bg-primary px-4 py-2 text-primary-foreground">Action</button>
    ),
  },
};
