/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormTextArea from '../FormTextArea';

describe('FormTextArea', () => {
  it('should render with required props', () => {
    createSnapshotTest(<FormTextArea />);
  });

  it('should render when passed a placeholder', () => {
    createSnapshotTest(<FormTextArea placeholder="testplaceholder" />);
  });

  it('should call onChange function when text is changed in textarea', () => {
    const props = { onChange: jest.fn() };
    const event = { target: { value: 'TestText' } };

    const FormTextAreaShallowInstance = shallow(<FormTextArea id="test" {...props} />);
    FormTextAreaShallowInstance.find('textarea').simulate('change', event);

    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledWith('TestText');
  });
});
