import type { Meta, StoryObj } from '@storybook/nextjs';
import Swatch from '../Swatch';

const meta: Meta<typeof Swatch> = {
  title: 'Swatch',
  component: Swatch,
};
export default meta;
type Story = StoryObj<typeof Swatch>;

export const Primary: Story = {
  args: {
    colorName: 'Primary Blue',
    hexCode: '#3ed6f0',
  },
};

export const Secondary: Story = {
  args: {
    colorName: 'Secondary Navy',
    hexCode: '#252e3e',
  },
};

export const BurntOrange: Story = {
  args: {
    colorName: 'Burnt Orange',
    hexCode: '#b0522e',
  },
};
