/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormTextArea from '../FormTextArea';

describe('FormTextArea', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormTextArea />);
  });
  test('should call onChange handler on changes', async () => {
    const formTextAreaInstance = mount(<FormTextArea onChange={jest.fn()} />);
    expect(formTextAreaInstance.state().value).toEqual('');
    formTextAreaInstance.find('textarea').simulate('change', { target: { value: 'test change' } });
    formTextAreaInstance.update();
    expect(formTextAreaInstance.state().value).toEqual('test change');
  });
});
