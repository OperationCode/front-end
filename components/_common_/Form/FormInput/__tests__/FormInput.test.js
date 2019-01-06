/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme';

import FormInput from '../FormInput';

describe('FormInput', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormInput id="test" />);
  });

  test('should render with label', () => {
    createSnapshotTest(<FormInput id="test" label="Testinput" />);
  });

  test('should call onChange from props after onChange', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<FormInput id="test" />);
  });

  it('should render with label', () => {
    createSnapshotTest(<FormInput id="test" label="Testinput" />);
  });

  it('should call onChange from props after onChange', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const onChangeMock = jest.fn();
    const wrap = mount(<FormInput onChange={onChangeMock} id="test" />);
    wrap.find('input').simulate('change', {
      target: { value: 'Test' },
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
<<<<<<< HEAD
    expect(onChangeMock).toBeCalledWith('Test', true);
  });

  test('should show error onChange if value is empty', () => {
=======
    expect(onChangeMock).toHaveBeenCalledWith('Test', true);
  });

  it('should show error onChange if value is empty', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const validationErrorMessage = 'invalid input';
    const wrap = mount(<FormInput validationErrorMessage={validationErrorMessage} id="test" />);
    wrap.find('input').simulate('change', {
      target: { value: '' },
    });
    expect(wrap.find('span').text()).toBe(validationErrorMessage);
  });

<<<<<<< HEAD
  test('should show no error onChange if value is not empty', () => {
=======
  it('should show no error onChange if value is not empty', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const validationErrorMessage = 'invalid input';
    const wrap = mount(<FormInput validationErrorMessage={validationErrorMessage} id="test" />);
    wrap.find('input').simulate('change', {
      target: { value: 'hello' },
    });
    expect(wrap.exists('span')).toBe(false);
  });

<<<<<<< HEAD
  test('should show error onChange if error with validateFunc', () => {
=======
  it('should show error onChange if error with validateFunc', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const validationErrorMessage = 'invalid input';
    const inputShouldContainString = 'Teststring1234';
    const wrap = mount(
      <FormInput
        validationErrorMessage={validationErrorMessage}
        validateFunc={t => t.includes(inputShouldContainString)}
        id="test"
      />,
    );
    wrap.find('input').simulate('change', {
      target: { value: 'hello' },
    });
    expect(wrap.find('span').text()).toBe(validationErrorMessage);

    // error should go away if typed correctly
    wrap.find('input').simulate('change', {
      target: { value: inputShouldContainString },
    });
    expect(wrap.exists('span')).toBe(false);
  });

<<<<<<< HEAD
  test('should show error onChange if error with validationRegex', () => {
=======
  it('should show error onChange if error with validationRegex', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const validationErrorMessage = 'invalid input';
    const validationRegex = new RegExp('^Test');
    const wrap = mount(
      <FormInput
        validationRegex={validationRegex}
        validationErrorMessage={validationErrorMessage}
        id="test"
      />,
    );
    wrap.find('input').simulate('change', {
      target: { value: 'hello' },
    });
    expect(wrap.find('span').text()).toBe(validationErrorMessage);

    // error should go away if typed correctly
    wrap.find('input').simulate('change', {
      target: { value: 'Teststring' },
    });
    expect(wrap.exists('span')).toBe(false);
  });
});
