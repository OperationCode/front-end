/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

describe('HeroBanner', () => {
  const testImageUrl = `${s3}heroBanner/stock_family-2.jpg`;

  it('should render with required props', () => {
    createSnapshotTest(<HeroBanner title="Test" imageSource={testImageUrl} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <HeroBanner className="testing-123" title="Test" imageSource={testImageUrl}>
        Testing 123
      </HeroBanner>,
    );
  });

  it('should have "fullViewHeight" class when passed isFullViewHeight', () => {
    const wrapper = mount(<HeroBanner title="Test" imageSource={testImageUrl} isFullViewHeight />);

    expect(wrapper.find('.HeroBanner').hasClass('fullViewHeight')).toStrictEqual(true);
  });

  it('should NOT have "fullViewHeight" class when NOT passed isFullViewHeight', () => {
    const wrapper = mount(<HeroBanner title="Test" imageSource={testImageUrl} />);

    expect(wrapper.find('.HeroBanner').hasClass('fullViewHeight')).toStrictEqual(false);
  });
});
