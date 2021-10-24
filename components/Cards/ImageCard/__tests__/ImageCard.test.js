import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <ImageCard alt="Test title" imageSource="/static/images/Family1.jpg">
        <p>Testing!</p>
      </ImageCard>,
    );
  });

  it('should render with many props assigned', () => {
    createShallowSnapshotTest(
      <ImageCard
        alt="Test title"
        className="test"
        imageSource="/static/images/Family1.jpg"
        isImageFirst={false}
      >
        <p>Testing!</p>
      </ImageCard>,
    );
  });
});
