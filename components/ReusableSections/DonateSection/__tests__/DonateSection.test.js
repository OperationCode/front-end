import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import DonateSection from '../DonateSection';

describe('DonateSection', () => {
  it('should render properly with no props', () => createShallowSnapshotTest(<DonateSection />));
});
