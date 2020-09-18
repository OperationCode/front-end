import React from 'react';

import SponsorsSection from '../SponsorsSection';

export default {
  component: SponsorsSection,
  title: 'Reusable/SponsorSection',
};

const Template = arguments_ => <SponsorsSection {...arguments_} />;

export const Default = Template.bind({});
