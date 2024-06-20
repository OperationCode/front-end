import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import { DonateSection } from '../DonateSection';

type DonateSectionStoryType = StoryObj<FC>;

const meta: Meta<typeof DonateSection> = {
  title: 'ReusableSections/DonateSection',
  component: DonateSection,
};

export default meta;

export const Default: DonateSectionStoryType = {
  render: args => <DonateSection {...args} />,
};
