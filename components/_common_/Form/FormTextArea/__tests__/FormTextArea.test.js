/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormTextArea from '../FormTextArea';

describe('FormTextArea', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormTextArea />);
  });

  test('should render when passed a placeholder', () => {
    createSnapshotTest(<FormTextArea placeholder="testplaceholder" />);
  });

  test('should call onChange function when text is changed in textarea', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<FormTextArea />);
  });

  it('should render when passed a placeholder', () => {
    createSnapshotTest(<FormTextArea placeholder="testplaceholder" />);
  });

  it('should call onChange function when text is changed in textarea', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const props = { onChange: jest.fn() };
    const event = { target: { value: 'TestText' } };

    const FormTextAreaShallowInstance = shallow(<FormTextArea id="test" {...props} />);
    FormTextAreaShallowInstance.find('textarea').simulate('change', event);

    expect(props.onChange).toHaveBeenCalledTimes(1);
<<<<<<< HEAD
    expect(props.onChange).toBeCalledWith('TestText');
=======
    expect(props.onChange).toHaveBeenCalledWith('TestText');
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
