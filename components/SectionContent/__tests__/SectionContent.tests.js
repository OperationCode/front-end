/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SectionContent from '../SectionContent';

const basicProps = {
  columns: [
    <div>
      <p>some test content</p>
    </div>,
  ],
  id: undefined,
};

describe('SectionContent', () => {
  it('should render with required props', () => {
    createSnapshotTest(<SectionContent {...basicProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <SectionContent
        columns={[
          <div>
            <p>some multi-column test content</p>
          </div>,
          <h6>OH YEAH!!</h6>,
          <aside>Testing...</aside>,
        ]}
        id="test-id"
      />,
    );
  });
});
