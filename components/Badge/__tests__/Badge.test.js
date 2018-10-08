/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Icon from 'static/images/icons/github_logo.svg';

import Badge from '../Badge';

const badgeIcon = <Icon />;

describe('Badge', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Badge svgComponent={badgeIcon} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Badge svgComponent={badgeIcon} label="Badge Icon" className="test-class" />,
    );
  });
});
