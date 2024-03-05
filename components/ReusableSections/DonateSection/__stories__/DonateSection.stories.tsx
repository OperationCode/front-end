import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DonateSection from '../DonateSection';

type DonateSectionStoryType = StoryObj<React.FC>;

const meta: Meta<typeof DonateSection> = {
  title: 'Reusable/DonateSection',
  component: DonateSection,
};

export default meta;

export const Default: DonateSectionStoryType = {
  render: args => <DonateSection {...args} />,
};
