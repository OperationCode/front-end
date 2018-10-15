/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PartnerLogoLink from '../PartnerLogoLink';

describe('PartnerLogoLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(<PartnerLogoLink>Test</PartnerLogoLink>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<PartnerLogoLink className="test-class">Test</PartnerLogoLink>);
  });
});
