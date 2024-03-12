import { Meta, StoryObj } from '@storybook/react';
import JoinSection from '../JoinSection';

type JoinSectionStoryType = StoryObj<typeof JoinSection>;

const meta: Meta<typeof JoinSection> = {
  title: 'Reusable/JoinSection',
  component: JoinSection,
};

export default meta;

export const Default: JoinSectionStoryType = {
  render: () => <JoinSection />,
};
