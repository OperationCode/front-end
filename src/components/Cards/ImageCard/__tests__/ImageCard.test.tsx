import createSnapshotTest from '@/test-utils/createSnapshotTest';
import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <ImageCard alt="Test title" imageSource="/static/images/Family1.jpg">
        <p>Testing!</p>
      </ImageCard>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
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
