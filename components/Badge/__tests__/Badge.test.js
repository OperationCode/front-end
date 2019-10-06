import React from 'react';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports
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

  it('should render the image after the label when `isImageFirst` is true', () => {
    const wrapper = mount(<Badge icon={badgeIcon} label="Badge Icon" isImageFirst />);
    const iconIsFirst = wrapper
      .find('figure')
      .childAt(0)
      .is(Icon);
    expect(iconIsFirst).toBe(true);
  });
  it('should render the image before the label when `isImageFirst` is false', () => {
    const wrapper = mount(<Badge icon={badgeIcon} label="Badge Icon" isImageFirst={false} />);
    const figcaptionIsFirst = wrapper
      .find('figure')
      .childAt(0)
      .is('figcaption');
    expect(figcaptionIsFirst).toBe(true);
  });
});
