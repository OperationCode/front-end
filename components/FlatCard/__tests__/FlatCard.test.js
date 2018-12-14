/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import FlatCard from '../FlatCard';

const testImageUrl = `${s3}headshots/david_molina.jpg`;

describe('FlatCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <FlatCard imageSource={testImageUrl} imageAlt="Image caption" headerText="Tester Person">
        Test
      </FlatCard>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <FlatCard
        className="test-class"
        imageSource={testImageUrl}
        imageAlt="Image Caption"
        headerText="Tester Person"
        subHeaderText="Leader of the Company"
        bodyText="Description of the person shown on the card."
      >
        Test
      </FlatCard>,
    );
  });
});
