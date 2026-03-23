import createSnapshotTest from '@/test-utils/createSnapshotTest';
import SuccessStory from '../SuccessStory';

describe('SuccessStory', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <SuccessStory
        imageSource="image.png"
        quote="Best test of my life!"
        title="Great testing culture"
      />,
    );
  });
});
