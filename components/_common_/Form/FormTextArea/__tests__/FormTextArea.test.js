/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { shallow } from 'enzyme';

import FormTextArea from '../FormTextArea';

describe('FormTextArea', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormTextArea />);
  });

  test('should call onChange function when change text', () => {
    const props = { onChange: jest.fn() };
    const event = { target: { value: 'sometext' } };

    const FormTextAreaShallowInstance = shallow(<FormTextArea id="test" {...props} />);
    FormTextAreaShallowInstance.find('textarea').simulate('change', event);

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
