import type { Meta, StoryObj } from '@storybook/nextjs';
import { ScrollToTopButton } from '../ScrollToTopButton';

const meta: Meta<typeof ScrollToTopButton> = {
  title: 'ScrollToTopButton',
  component: ScrollToTopButton,
};
export default meta;
type Story = StoryObj<typeof ScrollToTopButton>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh', position: 'relative' }}>
      <p>Scroll down to see the button appear.</p>
      <ScrollToTopButton />
    </div>
  ),
};
