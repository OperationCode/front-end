import React from 'react';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports
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
  });
});
