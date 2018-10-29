import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import NavListItem from '../NavListItem';

describe('NavListItem', () => {
  it('should render with required props passed', () =>
    createShallowSnapshotTest(
      <NavListItem href="/test" name="Test" shouldPrefetch={false} sublinks={[]} />,
    ));

  // TODO: Make more tests:
  // shows sublinks on hover
  // shows sublinks after button click
  // hides sublinks after sequentially hovering over THEN clicking button
});
