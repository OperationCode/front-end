import createSnapshotTest from 'test-utils/createSnapshotTest';

import Content from '../Content';

// eslint-disable-next-line unicorn/prevent-abbreviations
const requiredProps = {
  columns: [
    <div key="content">
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
          <div key="col1">
            <p>some multi-column test content</p>
          </div>,
          <h6 key="col2">OH YEAH!!</h6>,
          <aside key="col3">Testing...</aside>,
        ]}
        hasTitleUnderline
        id="test-id"
        isFullViewportHeight
        title="Testing!"
      />,
    );
  });
});
