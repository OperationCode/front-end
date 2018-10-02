/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme';

import FormSelect from '../FormSelect';

describe('FormSelect', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <FormSelect
        options={[{ label: 'test 1', value: 'TEST1' }, { label: 'test 2', value: 'TEST2' }]}
      />,
    );
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
