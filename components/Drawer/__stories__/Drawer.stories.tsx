import type { Meta, StoryObj } from '@storybook/react';
import Drawer from '../Drawer';

type DrawerStorytype = StoryObj<typeof Drawer>;

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export default meta;

/**
 * Default Drawer supplied with only required args.
 */
export const Default: DrawerStorytype = {
  render: args => <Drawer {...args} />,
  args: {
    children: 'Drawer content will only display on display size of Tablet or smaller',
    isVisible: true,
  },
};
