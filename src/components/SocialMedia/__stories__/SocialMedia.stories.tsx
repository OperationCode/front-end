import type { Meta, StoryObj } from '@storybook/nextjs';
import SocialMedia from '../SocialMedia';

const meta: Meta<typeof SocialMedia> = {
  title: 'SocialMedia',
  component: SocialMedia,
  decorators: [
    (Story) => (
      <div className="bg-secondary p-8">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SocialMedia>;

export const Default: Story = {};
