/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import CloseButton from '../CloseButton';

const noOp = () => {};

describe('CloseButton', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<CloseButton onClick={noOp} />);
  });

  it('should render as disabled', () => {
    createSnapshotTest(<CloseButton disabled onClick={noOp} />);
  });
});
