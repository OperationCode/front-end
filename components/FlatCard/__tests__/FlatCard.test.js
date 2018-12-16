/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import FlatCard from '../FlatCard';

const testImageUrl = `${s3}headshots/david_molina.jpg`;

describe('FlatCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <FlatCard
        imageSource={testImageUrl}
        imageAlt="Image caption"
        renderContent={
          <>
            <p>Example content goes here</p>
            <p>More content goes here</p>
          </>
        }
      />,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <FlatCard
        className="test-class"
        imageSource={testImageUrl}
        imageAlt="Image Caption"
        renderHeader={
          <>
            <h1>Main heading</h1>
            <h6>Sub heading</h6>
          </>
        }
        renderContent={
          <>
            <p>Example content goes here</p>
            <p>More content goes here</p>
          </>
        }
      />,
    );
  });
});
