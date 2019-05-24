/* eslint-env jest */
import React from 'react';
import { Formik, Field } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import wait from 'test-utils/wait';
import { shallow, mount } from 'enzyme';

import Form from '../../Form';
import Input from '../Input';

describe('Input', () => {
  const requiredProps = {
    field: {
      name: 'someInputName',
    },
    form: { touched: { someInputName: false }, errors: { someInputName: '' } },
    label: 'Some Input:',
  };

  it('should render with required props', () => {
    createSnapshotTest(<Input {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const wrapper = shallow(<Input {...requiredProps} isLabelHidden />);

    expect(wrapper).toContainExactlyOneMatchingElement('Label');
  });

  it('should display an error message when a required field is touched', async () => {
    const validate = () => ({ test: 'Required' });

    const wrapper = mount(
      <Formik validate={validate}>
        <Form>
          <Field id="test" name="test" label="label" component={Input} />,
        </Form>
      </Formik>,
    );

    wrapper.find('input').simulate('blur'); // trigger validation
    await wait();
    wrapper.update();
    expect(wrapper.find('Alert')).toHaveText('Required');
  });

  it('should render the label after input, but only when input type is radio or checkbox', () => {
    const checkboxInput = shallow(<Input {...requiredProps} type="checkbox" />);
    const radioInput = shallow(<Input {...requiredProps} type="radio" />);

    const checkboxField = checkboxInput.find('.field');
    const radioField = radioInput.find('.field');

    expect(checkboxField.childAt(0)).toContainExactlyOneMatchingElement('input');
    expect(checkboxField.childAt(1)).toContainExactlyOneMatchingElement('Label');

    expect(radioField.childAt(0)).toContainExactlyOneMatchingElement('input');
    expect(radioField.childAt(1)).toContainExactlyOneMatchingElement('Label');

    const otherInputTypes = [
      'button',
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'image',
      'month',
      'number',
      'password',
      'range',
      'reset',
      'search',
      'submit',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ];

    expect(otherInputTypes).not.toContain('radio');
    expect(otherInputTypes).not.toContain('checkbox');

    otherInputTypes.forEach(inputType => {
      const input = shallow(<Input {...requiredProps} type={inputType} />);

      expect(input.find('.field').childAt(0)).toContainExactlyOneMatchingElement('Label');
      expect(input.find('.field').childAt(1)).toContainExactlyOneMatchingElement('input');
    });
  });

  // TODO: Add test for valid/invalid styles based on touched/errors
});
