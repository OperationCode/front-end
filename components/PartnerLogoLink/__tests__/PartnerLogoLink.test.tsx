import { PartnerLogoLink } from '../PartnerLogoLink';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('PartnerLogoLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <PartnerLogoLink
        name="Partner Inc."
        logoSource="https://user-images.githubusercontent.com/logo"
        url="https://user-images.githubusercontent.com"
      />,
    );
  });
});
