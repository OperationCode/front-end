import createSnapshotTest from 'test-utils/createSnapshotTest';
import SocialLoginButtons from '../SocialLoginButtons';

describe('SocialLoginButtons', () => {
  beforeEach(() => {
    const fbScript = document.createElement('script');
    fbScript.id = 'facebook-jssdk';
    document.body.append(fbScript);
  });

  it('should render with required props', () => {
    createSnapshotTest(<SocialLoginButtons onGoogleFailure={vi.fn()} onSuccess={vi.fn()} />);
  });
});
