import type { Meta, StoryObj } from '@storybook/react';
import SponsorsSection from '../SponsorsSection';

type SponsorsSectionStoryType = StoryObj<typeof SponsorsSection>;

const meta: Meta<typeof SponsorsSection> = {
  title: 'ReusableSections/SponsorsSection',
  component: SponsorsSection,
};

export default meta;

export const Default: SponsorsSectionStoryType = {
  render: () => <SponsorsSection />,
};
