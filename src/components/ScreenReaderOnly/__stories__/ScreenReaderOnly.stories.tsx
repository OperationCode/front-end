import type { Meta, StoryObj } from '@storybook/nextjs';
import ScreenReaderOnly from '../ScreenReaderOnly';

const meta: Meta<typeof ScreenReaderOnly> = {
  title: 'ScreenReaderOnly',
  component: ScreenReaderOnly,
};
export default meta;
type Story = StoryObj<typeof ScreenReaderOnly>;

export const Default: Story = {
  render: () => (
    <div>
      <p>The text below is visually hidden but accessible to screen readers:</p>
      <ScreenReaderOnly>This text is only visible to screen readers</ScreenReaderOnly>
    </div>
  ),
};
