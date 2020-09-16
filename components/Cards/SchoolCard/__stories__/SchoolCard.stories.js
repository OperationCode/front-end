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

/* storiesOf('Cards/SchoolCard', module)
  .addDecorator(withKnobs)
  .add('with many locations', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', false)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', true)}
      hasOnlyOnline={boolean('hasOnlyOnline', false)}
      isFullTime={boolean('isFullTime', true)}
      isVetTecApproved={boolean('isVetTecApproved', true)}
      locations={[
        { city: 'Los Angeles', state: 'CA', vaAccepted: false },
        { city: 'Joshua Tree', state: 'CA', vaAccepted: true },
        { city: 'Boston', state: 'MA', vaAccepted: false },
        { city: 'New York', state: 'NY', vaAccepted: false },
        { city: 'Portland', state: 'OR', vaAccepted: false },
        { city: 'Seattle', state: 'WA', vaAccepted: true },
      ]}
      logoSource={text('logoSource', )}
      name={text('name', 'General Assembly')}
      website={text('website', )}
      toggleModal={action('Modal opened!')}
    />
  ))
  .add('with one location', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', true)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', false)}
      hasOnlyOnline={boolean('hasOnlyOnline', false)}
      isFullTime={boolean('isFullTime', true)}
      isVetTecApproved={boolean('isVetTecApproved', true)}
      locations={[
        {
          city: 'Los Angeles',
          state: 'CA',
          vaAccepted: boolean('vaAccepted', false),
        },
      ]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/code_immersives.jpg`)}
      name={text('name', 'Code Immersives')}
      website={text('website', 'https://codeimmersives.com')}
      toggleModal={action('Modal opened!')}
    />
  ))
  .add('with no physical locations', () => (
    <SchoolCard
      hasHardwareIncluded={boolean('hasHardwareIncluded', false)}
      hasHousing={boolean('hasHousing', false)}
      hasOnline={boolean('hasOnline', true)}
      hasOnlyOnline={boolean('hasOnlyOnline', true)}
      isFullTime={boolean('isFullTime', false)}
      isVetTecApproved={boolean('isVetTecApproved', true)}
      locations={[]}
      logoSource={text('logoSource', `${s3}codeSchoolLogos/thinkful.jpg`)}
      name={text('name', 'Thinkful')}
      website={text('website', 'https://thinkful.com')}
      toggleModal={action('Modal opened!')}
    />
  )); */
