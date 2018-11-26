import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import BackSchoolCard from '../BackSchoolCard';

const locations = [
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    zip: '94111',
  },
];

describe('BackSchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <BackSchoolCard cardFlipCallback={() => {}} locations={locations} logoSource="logoSource">
        <p>Testing!</p>
      </BackSchoolCard>,
    );
  });
});
