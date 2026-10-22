import FacebookLogo from '@/static/images/icons/facebook_logo.svg';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import SocialMediaItem from '../SocialMediaItem';

describe('SocialMediaItem', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <SocialMediaItem name="Facebook" href="https://facebook.com" svg={<FacebookLogo />} />,
    );
  });
});
