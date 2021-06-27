import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import SuccessStory from '../SuccessStory';

describe('SuccessStory', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <SuccessStory
        imageSource="image.png"
        quote="Best test of my life!"
        title="Great testing culture"
      />,
    );
  });
});
