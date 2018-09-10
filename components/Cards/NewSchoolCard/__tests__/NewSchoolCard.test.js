/* eslint-env jest */
import React from 'react';
import s3 from 'common/constants/urls';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import NewSchoolCard from '../NewSchoolCard';

describe('NewSchoolCard', () => {
  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <NewSchoolCard
        website="https://www.codeplatoon.org"
        name="Code Platoon"
        address="123 Baker Street"
        schoolCity="Chicago"
        schoolState="IL"
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        doesAcceptGIBill
        isFullTime
        hasHardware={false}
      />,
    );
  });

  test('should render properly with all required assigned', () => {
    createSnapshotTest(
      <NewSchoolCard
        website="https://www.codeplatoon.org/not-real"
        name="Code Platoon Fake"
        address="123 Baker Street"
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        doesAcceptGIBill={false}
        isFullTime={false}
        hasHardware
      />,
    );
  });
});
