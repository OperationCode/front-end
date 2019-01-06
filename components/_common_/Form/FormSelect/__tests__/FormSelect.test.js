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

<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormSelect options={options} />);
  });

  test('should render when passed a prompt and options', () => {
    createSnapshotTest(<FormSelect options={options} prompt="Select an item" />);
  });

  test('should call onChange from props after onChange', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<FormSelect options={options} />);
  });

  it('should render when passed a prompt and options', () => {
    createSnapshotTest(<FormSelect options={options} prompt="Select an item" />);
  });

  it('should call onChange from props after onChange', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const onChangeMock = jest.fn();
    const wrap = mount(<FormSelect onChange={onChangeMock} options={options} />);
    wrap.find('select').simulate('change', {
      target: { value: 'TEST1' },
    });

    wrap.find('select').simulate('blur');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
<<<<<<< HEAD
    expect(onChangeMock).toBeCalledWith('TEST1');
  });

  test('should call onChange from props after onChange with validate', () => {
=======
    expect(onChangeMock).toHaveBeenCalledWith('TEST1');
  });

  it('should call onChange from props after onChange with validate', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const onChangeMock = jest.fn();
    const wrap = mount(
      <FormSelect
        onChange={onChangeMock}
        validationFunc={e => e.target.value === 'TEST3'}
        options={[...options, { label: 'test 3', value: 'TEST3' }]}
      />,
    );
    wrap.find('select').simulate('change', {
      target: { value: 'TEST2' },
    });
    wrap.find('select').simulate('blur');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
<<<<<<< HEAD
    expect(onChangeMock).toBeCalledWith('TEST1');
=======
    expect(onChangeMock).toHaveBeenCalledWith('TEST1');
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

    wrap.find('select').simulate('change', {
      target: { value: 'TEST3' },
    });
    wrap.find('select').simulate('blur');
    expect(onChangeMock).toHaveBeenCalledTimes(2);
<<<<<<< HEAD
    expect(onChangeMock).toBeCalledWith('TEST3');
=======
    expect(onChangeMock).toHaveBeenCalledWith('TEST3');
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
