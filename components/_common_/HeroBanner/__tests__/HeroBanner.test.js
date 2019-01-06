/* eslint-env jest */
import React from 'react';
<<<<<<< HEAD
=======
import { shallow } from 'enzyme';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

<<<<<<< HEAD
// TODO: Remove this
/* prettier-disable */
describe('HeroBanner', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <HeroBanner title="Test" imageSource={`${s3}heroBanner/stock_family-2.jpg`} />,
    );
  });

  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <HeroBanner
        className="testing-123"
        title="Test"
        imageSource={`${s3}heroBanner/stock_family-2.jpg`}
      >
=======
describe('HeroBanner', () => {
  const testImageUrl = `${s3}heroBanner/stock_family-2.jpg`;

  it('should render with required props', () => {
    createSnapshotTest(<HeroBanner title="Test" imageSource={testImageUrl} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <HeroBanner className="testing-123" title="Test" imageSource={testImageUrl}>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        Testing 123
      </HeroBanner>,
    );
  });
<<<<<<< HEAD
=======

  it('should have "fullViewHeight" class when passed isFullViewHeight', () => {
    const wrapper = shallow(
      <HeroBanner title="Test" imageSource={testImageUrl} isFullViewHeight />,
    );

    expect(wrapper.find('.HeroBanner').hasClass('fullViewHeight')).toStrictEqual(true);
  });

  it('should NOT have "fullViewHeight" class when NOT passed isFullViewHeight', () => {
    const wrapper = shallow(<HeroBanner title="Test" imageSource={testImageUrl} />);

    expect(wrapper.find('.HeroBanner').hasClass('fullViewHeight')).toStrictEqual(false);
  });
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
});
