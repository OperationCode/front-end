/* eslint-env jest */
import React from 'react';
<<<<<<< HEAD
import createSnapshotTest from 'test-utils/createSnapshotTest';

import CloseButton from '../CloseButton';

const noOp = () => {};

describe('CloseButton', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<CloseButton onClick={noOp} />);
  });

  it('should render as disabled', () => {
    createSnapshotTest(<CloseButton disabled onClick={noOp} />);
=======
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<CloseButton onClick={jest.fn()} />);
  });

  it('should not be clickable when disabled', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<CloseButton disabled onClick={onClickMock} />);

    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(0);
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
