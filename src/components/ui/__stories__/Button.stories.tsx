import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '../button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: { children: 'Button' },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Destructive: Story = { args: { variant: 'destructive' } };
export const Link: Story = { args: { variant: 'link' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const ExtraSmall: Story = { args: { size: 'xs' } };
