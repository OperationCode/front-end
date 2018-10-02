/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme';

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
  
  test('should render when passed a prompt and options', () => {
    createSnapshotTest(
      <FormSelect
        prompt="Select an item"
        options={[{ label: 'test 1', value: 'TEST1' }, { label: 'test 2', value: 'TEST2' }]}
      />,
    );
  });

  test('should call onChange from props after onChange', () => {
    const onChangeMock = jest.fn();
    const wrap = mount(
      <FormSelect
        onChange={onChangeMock}
        options={[{ label: 'test 1', value: 'TEST1' }, { label: 'test 2', value: 'TEST2' }]}
      />,
    );
    wrap.find('select').simulate('change', {
      target: { value: 'TEST1' },
    });

    wrap.find('select').simulate('blur');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalledWith('TEST1');
  });

  test('should call onChange from props after onChange with validate', () => {
    const onChangeMock = jest.fn();
    const wrap = mount(
      <FormSelect
        onChange={onChangeMock}
        validationFunc={e => e.target.value === 'TEST3'}
        options={[
          { label: 'test 1', value: 'TEST1' },
          { label: 'test 2', value: 'TEST2' },
          { label: 'test 3', value: 'TEST3' },
        ]}
      />,
    );
    wrap.find('select').simulate('change', {
      target: { value: 'TEST2' },
    });
    wrap.find('select').simulate('blur');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalledWith('TEST1');

    wrap.find('select').simulate('change', {
      target: { value: 'TEST3' },
    });
    wrap.find('select').simulate('blur');
    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toBeCalledWith('TEST3');
  });
});
