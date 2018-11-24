import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import SchoolCard from '../SchoolCard';

const locations = [
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    zip: '94111',
  },
];

describe('SchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <SchoolCard
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="logoSource.com"
        name="school name"
        website="website.com"
      >
        <p>Testing!</p>
      </SchoolCard>,
    );
  });
});
