/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Bullseye from 'static/images/icons/Custom/bullseye.svg';
import BadgeGroup from '../BadgeGroup';

const requiredProps = {
  items: [
    {
      label: 'Lorem ipsum',
      icon: <Bullseye />,
    },
  ],
};

describe('BadgeGroup', () => {
  it('should render with required props', () => {
    createSnapshotTest(<BadgeGroup {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<BadgeGroup hasMarginTop {...requiredProps} />);
  });
});
