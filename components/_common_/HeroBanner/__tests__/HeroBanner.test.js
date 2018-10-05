/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

// TODO: Remove this
/* prettier-disable */
describe('HeroBanner', () => {
  const testImageUrl = `${s3}heroBanner/stock_family-2.jpg`;

  test('should render with just required props passed', () => {
    createSnapshotTest(<HeroBanner title="Test" imageSource={testImageUrl} />);
  });

  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <HeroBanner className="testing-123" title="Test" imageSource={testImageUrl}>
        Testing 123
      </HeroBanner>,
    );
  });
  test('should have "fullViewHeight" class when passed isFullViewHeight', () => {
    const wrapper = mount(<HeroBanner title="Test" imageSource={testImageUrl} isFullViewHeight />);

    expect(wrapper.find('.HeroBanner').hasClass('fullViewHeight')).toEqual(true);
  });

  test('should NOT have "fullViewHeight" class when NOT passed isFullViewHeight', () => {
    const wrapper = mount(<HeroBanner title="Test" imageSource={testImageUrl} />);

    expect(wrapper.find('.HeroBanner').hasClass('fullViewHeight')).toEqual(false);
  });
});
