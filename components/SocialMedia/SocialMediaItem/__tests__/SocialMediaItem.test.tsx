import { SocialMediaItem } from '../SocialMediaItem';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import FacebookLogo from '@/public/static/images/icons/facebook_logo.svg';

describe('SocialMediaItem', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <SocialMediaItem name="Facebook" href="https://facebook.com" svg={<FacebookLogo />} />,
    );
  });
});
