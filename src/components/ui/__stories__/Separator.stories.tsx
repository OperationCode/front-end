import type { Meta, StoryObj } from '@storybook/nextjs';
import { Separator } from '../separator';

const meta: Meta<typeof Separator> = {
  title: 'Separator',
  component: Separator,
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px]">
      <p>Content above</p>
      <Separator className="my-4" />
      <p>Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span>Left</span>
      <Separator orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
