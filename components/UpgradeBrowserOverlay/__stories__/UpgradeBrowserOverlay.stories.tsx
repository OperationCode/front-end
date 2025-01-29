import type { Meta, StoryObj } from '@storybook/react';
import UpgradeBrowserOverlay from '../UpgradeBrowserOverlay';

type UpgradeBrowserOverlayStoryType = StoryObj<typeof UpgradeBrowserOverlay>;

const meta: Meta<typeof UpgradeBrowserOverlay> = {
  title: 'UpgradeBrowserOverlay',
  component: UpgradeBrowserOverlay,
};

export default meta;

export const Default: UpgradeBrowserOverlayStoryType = {
  render: () => <UpgradeBrowserOverlay />,
};
