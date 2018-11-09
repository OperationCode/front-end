/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PartnerLogoLink from '../PartnerLogoLink';

describe('PartnerLogoLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <PartnerLogoLink
        logo="https://partnerinc.com/logo"
        name="Partner Inc."
        url="https://partnerinc.com"
      >
        Test
      </PartnerLogoLink>,
    );
  });
});
