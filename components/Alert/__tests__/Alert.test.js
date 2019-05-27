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
      <Alert onToggle={jest.fn} type="success" isOpen>
        Success Test Alert!
      </Alert>,
    );
  });

  it('should call props.onToggle when isOpen and when CloseAlertButton is clicked', () => {
    const onToggleMock = jest.fn();

    const wrapper = mount(
      <Alert onToggle={onToggleMock} type="success" isOpen>
        Success Test Alert!
      </Alert>,
    );

    const CloseAlertButton = wrapper.find('button');

    expect(onToggleMock).toHaveBeenCalledTimes(0);
    CloseAlertButton.simulate('click');
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it('should not render button if isOpen is false or no onToggle function passed', () => {
    const AlertNotOpen = mount(<Alert isOpen={false}>Testing!</Alert>);
    const AlertNoonToggle = mount(<Alert isOpen>Testing!</Alert>);

    expect(AlertNotOpen.find('button')).not.toExist();
    expect(AlertNoonToggle.find('button')).not.toExist();
  });
});
