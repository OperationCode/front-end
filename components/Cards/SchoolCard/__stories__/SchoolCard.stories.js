import React from 'react';

import { s3 } from 'common/constants/urls';

import SchoolCard from '../SchoolCard';

export default {
  component: SchoolCard,
  title: 'Cards/SchoolCard',
};

const Template = arguments_ => <SchoolCard {...arguments_} />;

// Default SchoolCard supplied with only required args
export const Default = Template.bind({});
Default.args = {
  hasHardwareIncluded: false,
  hasOnline: true,
  hasOnlyOnline: false,
  locations: [{ city: 'CityName1', state: 'StateName1', vaAccepted: true }],
  logoSource: `${s3}codeSchoolLogos/general_assembly.jpg`,
  name: 'General Assembly',
  website: 'https://generalassembly.com',
  toggleModal: { action: 'Modal opened!' },
};

// SchoolCard supplied with multiple locations
export const WithMultipleLocations = Template.bind({});
WithMultipleLocations.args = {
  ...Default.args,
  locations: [
    { city: 'CityName1', state: 'StateName1', vaAccepted: true },
    { city: 'CityName2', state: 'StateName2', vaAccepted: true },
    { city: 'CityName3', state: 'StateName3', vaAccepted: true },
    { city: 'CityName4', state: 'StateName4', vaAccepted: false },
    { city: 'CityName5', state: 'StateName5', vaAccepted: false },
    { city: 'CityName6', state: 'StateName6', vaAccepted: false },
  ],
};

// SchoolCard supplied with no locations
export const WithNoLocations = Template.bind({});
WithNoLocations.args = {
  ...Default.args,
  locations: [],
};
