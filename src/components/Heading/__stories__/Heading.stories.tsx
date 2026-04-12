import type { Meta, StoryObj } from '@storybook/nextjs';
import Heading from '../Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  args: { text: 'Our Mission' },
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const WithUnderline: Story = {
  args: { hasTitleUnderline: true },
};

export const WithoutHashLink: Story = {
  args: { hasHashLink: false },
};

export const HeadingLevel1: Story = {
  args: { headingLevel: 1, text: 'Page Title' },
};

export const HeadingLevel3: Story = {
  args: { headingLevel: 3, text: 'Subsection' },
};
