/* eslint-env jest */
import React from 'react';
import s3 from 'common/constants/urls';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import mockedRouter from 'test-utils/mocks/nextRouterMock';
import SchoolCard from '../SchoolCard';

describe('SchoolCard', () => {
  it('should render with many props assigned', () => {
    createSnapshotTest(
      <SchoolCard
        schoolWebsite="https://www.codeplatoon.org"
        schoolName="Code Platoon"
        schoolAddress="123 Baker Street"
        schoolCity="Chicago"
        schoolState="IL"
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        acceptsGIBill
        isFullTime
        hasHardware={false}
        router={mockedRouter}
      />,
    );
  });

  it('should render with required props', () => {
    createSnapshotTest(
      <SchoolCard
        schoolWebsite="https://www.codeplatoon.org/not-real"
        schoolName="Code Platoon Fake"
        schoolAddress="123 Baker Street"
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        acceptsGIBill={false}
        isFullTime={false}
        hasHardware
        router={mockedRouter}
      />,
    );
  });
});
