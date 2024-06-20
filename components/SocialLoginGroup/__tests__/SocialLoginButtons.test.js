import { SocialLoginButtons } from '../SocialLoginButtons';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

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
