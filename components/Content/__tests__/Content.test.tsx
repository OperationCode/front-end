import createSnapshotTest from 'test-utils/createSnapshotTest';

import { Content } from '../Content';

// eslint-disable-next-line unicorn/prevent-abbreviations
const requiredProps = {
  columns: [
    <div>
      <p>some test content</p>
    </div>,
  ],
  id: undefined,
};

describe('Content', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Content {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Content
        columns={[
          <div>
            <p>some multi-column test content</p>
          </div>,
          <h6>OH YEAH!!</h6>,
          <aside>Testing...</aside>,
        ]}
        hasTitleUnderline
        id="test-id"
        isFullViewportHeight
        title="Testing!"
      />,
    );
  });
});
