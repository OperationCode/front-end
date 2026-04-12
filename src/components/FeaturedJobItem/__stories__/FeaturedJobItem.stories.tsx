import type { Meta, StoryObj } from '@storybook/nextjs';
import FeaturedJobItem from '../FeaturedJobItem';

const meta: Meta<typeof FeaturedJobItem> = {
  title: 'FeaturedJobItem',
  component: FeaturedJobItem,
};
export default meta;
type Story = StoryObj<typeof FeaturedJobItem>;

export const Default: Story = {
  args: {
    title: 'Senior Software Engineer',
    description: 'Build and maintain scalable web applications using modern technologies.',
    source: 'Acme Corp',
    sourceUrl: 'https://example.com/jobs/123',
    city: 'Austin',
    state: 'TX',
    country: 'USA',
  },
};

export const Remote: Story = {
  args: {
    title: 'Frontend Developer',
    description: 'Work remotely on our React-based platform.',
    source: 'Remote Inc',
    sourceUrl: 'https://example.com/jobs/456',
    country: 'USA',
    remote: true,
  },
};
