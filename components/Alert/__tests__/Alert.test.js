/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Alert from '../Alert';

describe('Alert', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Alert>Error Test Alert!</Alert>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Alert onClose={jest.fn} type="success" isOpen>
        Success Test Alert!
      </Alert>,
    );
  });

  it('should call props.onClose when isOpen and when CloseAlertButton is clicked', () => {
    const onCloseMock = jest.fn();

    const wrapper = mount(
      <Alert onClose={onCloseMock} type="success" isOpen>
        Success Test Alert!
      </Alert>,
    );

    const CloseAlertButton = wrapper.find('button');

    expect(onCloseMock).toHaveBeenCalledTimes(0);
    CloseAlertButton.simulate('click');
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should not render button if isOpen is false or no onClose function passed', () => {
    const AlertNotOpen = mount(<Alert isOpen={false}>Testing!</Alert>);
    const AlertNoOnClose = mount(<Alert isOpen>Testing!</Alert>);

    expect(AlertNotOpen.find('button')).not.toExist();
    expect(AlertNoOnClose.find('button')).not.toExist();
  });
});
