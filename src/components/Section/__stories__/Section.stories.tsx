import type { Meta, StoryObj } from '@storybook/nextjs';
import Section from '../Section';

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: 'Our Values',
    underline: true,
    children: <p>We believe in service, community, and growth.</p>,
  },
};

export const WhiteTheme: Story = {
  args: {
    title: 'White Section',
    theme: 'white',
    children: <p>Content on a white background.</p>,
  },
};
