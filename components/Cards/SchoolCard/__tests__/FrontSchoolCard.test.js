import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import FrontSchoolCard from '../FrontSchoolCard';

const locations = [
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    zip: '94111',
  },
];

describe('FrontSchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <FrontSchoolCard
        cardFlipCallback={() => {}}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="logoSource"
        name="school name"
        website="website"
      >
        <p>Testing!</p>
      </FrontSchoolCard>,
    );
  });
});
