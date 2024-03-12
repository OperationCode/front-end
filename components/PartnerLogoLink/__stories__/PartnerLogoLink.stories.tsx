import { Meta, StoryObj } from '@storybook/react';
import { s3 } from 'common/constants/urls';
import PartnerLogoLink from '../PartnerLogoLink';

type PartnerLogoLinkStoryType = StoryObj<typeof PartnerLogoLink>;

const meta: Meta<typeof PartnerLogoLink> = {
  title: 'PartnerLogoLink',
  component: PartnerLogoLink,
  args: {
    logoSource: `${s3}partnerLogos/github.png`,
    name: 'Partner Name',
    url: '#',
  },
};

export default meta;

export const Default: PartnerLogoLinkStoryType = {
  render: args => <PartnerLogoLink {...args} />,
};
