/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Icon from 'static/images/icons/github_logo.svg';

import Badge from '../Badge';

const badgeIcon = <Icon />;

describe('Badge', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Badge icon={badgeIcon} label="Testing" />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<Badge icon={badgeIcon} label="Badge Icon" className="test-class" />);
  });

  it('should render the image after the label when `isImageFirst` is false', () => {
    const wrapper = shallow(<Badge icon={badgeIcon} label="Badge Icon" isImageFirst={false} />);
    expect(wrapper.children().first()).toContainExactlyOneMatchingElement('figure');
  });
});
