import type { Meta, StoryObj } from '@storybook/nextjs';
import JavaScriptIcon from '@/static/images/icons/javascript_logo.svg';
import Medal from '../Medal';

const meta: Meta<typeof Medal> = {
  title: 'Medal',
  component: Medal,
};
export default meta;
type Story = StoryObj<typeof Medal>;

export const Default: Story = {
  args: {
    icon: <JavaScriptIcon />,
    label: 'JavaScript',
  },
};

export const LabelFirst: Story = {
  args: {
    icon: <JavaScriptIcon />,
    label: 'JavaScript',
    isImageFirst: false,
  },
};
