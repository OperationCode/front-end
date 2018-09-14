/* eslint-env jest */
import React from 'react';
import s3 from 'common/constants/urls';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SchoolCard from '../SchoolCard';

const mockManyLocationsWithGIAccepted = [
  {
    city: 'Austin',
    state: 'TX',
    doesAcceptGIBill: true,
  },
  {
    city: 'Los Angeles',
    state: 'CA',
    doesAcceptGIBill: false,
  },
  {
    city: 'New York',
    state: 'NT',
    doesAcceptGIBill: true,
  },
];

// const mockManyLocationsWithoutGIAccepted = [
//   {
//     city: 'Austin',
//     state: 'TX',
//     doesAcceptGIBill: false,
//   },
//   {
//     city: 'Los Angeles',
//     state: 'CA',
//     doesAcceptGIBill: false,
//   },
//   {
//     city: 'New York',
//     state: 'NT',
//     doesAcceptGIBill: false,
//   },
// ];

// const oneLocationWithoutGIAccepted = [
//   {
//     city: 'Portland',
//     state: 'OR',
//     doesAcceptGIBill: false,
//   },
// ];

// const oneLocationWithGIAccepted = [
//   {
//     city: 'Portland',
//     state: 'OR',
//     doesAcceptGIBill: true,
//   },
// ];

describe('SchoolCard', () => {
  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <SchoolCard
        hasHardwareIncluded={false}
        hasHousing={false}
        hasOnline
        hasOnlineOnly={false}
        isFullTime
        locations={mockManyLocationsWithGIAccepted}
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        name="Code Platoon Fake"
        website="https://www.codeplatoon.org/not-real"
      />,
    );
  });
});
