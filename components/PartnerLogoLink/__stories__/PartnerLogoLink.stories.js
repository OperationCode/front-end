import React from 'react';

import { s3 } from 'common/constants/urls';
import PartnerLogoLink from '../PartnerLogoLink';

export default {
  component: PartnerLogoLink,
  title: 'PartnerLogoLink',
};

const Template = arguments_ => <PartnerLogoLink {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  logoSource: `${s3}partnerLogos/github.png`,
  name: 'Partner Name',
  url: '#',
};
