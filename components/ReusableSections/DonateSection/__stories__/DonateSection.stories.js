import React from 'react';

import DonateSection from '../DonateSection';

export default {
  component: DonateSection,
  title: 'Reusable/DonateSection',
};

const Template = arguments_ => <DonateSection {...arguments_} />;

export const Default = Template.bind({});
