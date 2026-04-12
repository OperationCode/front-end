import type { Meta, StoryObj } from '@storybook/nextjs';
import Content from '../Content';

const meta: Meta<typeof Content> = {
  title: 'Content',
  component: Content,
};
export default meta;
type Story = StoryObj<typeof Content>;

export const Default: Story = {
  args: {
    title: 'Our Mission',
    hasTitleUnderline: true,
    columns: [
      <p key="1">Column one content</p>,
      <p key="2">Column two content</p>,
      <p key="3">Column three content</p>,
    ],
  },
};

export const WhiteTheme: Story = {
  args: {
    title: 'White Theme',
    theme: 'white',
    columns: [<p key="1">Some content</p>],
  },
};
