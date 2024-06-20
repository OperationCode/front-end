import { SocialMediaContainer } from '../SocialMediaContainer';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('SocialMediaContainer', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <SocialMediaContainer>
        <div>Testing 1</div>
        <div>Testing 2</div>
      </SocialMediaContainer>,
    );
  });
});
