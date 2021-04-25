import createSnapshotTest from 'test-utils/createSnapshotTest';

import PartnerLogoLink from '../PartnerLogoLink';

describe('PartnerLogoLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <PartnerLogoLink
        name="Partner Inc."
        logoSource="https://partnerinc.com/logo"
        url="https://partnerinc.com"
      />,
    );
  });
});
