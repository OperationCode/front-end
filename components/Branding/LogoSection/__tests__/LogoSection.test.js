/* eslint-disable prettier/prettier */
import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import LogoSection from '../LogoSection';

describe('LogoSection', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<LogoSection />);
  });
});
