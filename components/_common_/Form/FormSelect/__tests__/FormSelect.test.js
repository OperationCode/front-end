/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormSelect from '../FormSelect';

describe('FormSelect', () => {
  let options;
  beforeEach(() => {
    options = [{ label: 'test 1', value: 'TEST1' }, { label: 'test 2', value: 'TEST2' }];
  });
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormSelect options={options} />);
  });
  test('should utilize onChange prop', () => {
    const changeSpy = jest.fn();
    const formSelectInstance = mount(<FormSelect options={options} onChange={changeSpy} />);
    expect(changeSpy).not.toHaveBeenCalled();
    formSelectInstance.find('select').simulate('blur', { target: { value: 1 } });
    formSelectInstance.update();
    expect(changeSpy).toHaveBeenCalled();
  });
  test('should utilize validationFunc prop', () => {
    const validationFuncSpy = jest.fn();
    const formSelectInstance = mount(
      <FormSelect options={options} validationFunc={validationFuncSpy} />,
    );
    expect(validationFuncSpy).not.toHaveBeenCalled();
    formSelectInstance.find('select').simulate('blur', { target: { value: 1 } });
    formSelectInstance.update();
    expect(validationFuncSpy).toHaveBeenCalled();
  });
  test('should render with prompt prop', () => {
    createSnapshotTest(<FormSelect options={options} prompt="true" />);
  });
});
