import type { Meta, StoryObj } from '@storybook/nextjs';
import Card from '../Card';

const meta: Meta<typeof Card> = {
  title: 'Cards/ArticleCard',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-center">
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
      </div>
    ),
  },
};

export const WithHoverAnimation: Story = {
  args: {
    hasAnimationOnHover: true,
    children: (
      <div className="text-center">
        <h3>Hover Me</h3>
        <p>This card has a hover animation.</p>
      </div>
    ),
  },
};
