/* eslint-env jest */
import React from 'react';
import { Formik, Field } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import { shallow, mount } from 'enzyme';

import Form from '../../Form';
import Select from '../Select';

const getReactSelect = enzymeWrapper => {
  const ReactSelect = enzymeWrapper
    .find('Select')
    .first()
    .find('input')
    .first();

  return ReactSelect;
};

describe('Select', () => {
  const name = 'someSelectName';
  const setFieldTouched = jest.fn();
  const setFieldValue = jest.fn();

  const requiredProps = {
    field: {
      name,
      value: '',
    },
    form: { touched: { [name]: false }, errors: { [name]: '' }, setFieldTouched, setFieldValue },
    label: 'Some Select:',
    options: [
      { label: '-- Select One --', value: '' },
      { label: 'Taco Bell', value: 'tacobell' },
      { label: `Wendy's`, value: 'wendys' },
      { label: 'Panda Express', value: 'pandaexpress' },
      { label: `McDonald's`, value: 'mcdonalds' },
      { label: 'Halal Guys', value: 'halalguys' },
    ],
  };

  it('should render with required props', () => {
    createSnapshotTest(<Select {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const wrapper = shallow(<Select {...requiredProps} isLabelHidden />);

    expect(wrapper).toContainExactlyOneMatchingElement('Label');
  });

  describe('interactions', () => {
    // You'll notice that interactions with react-select are usually tested via keyboard
    // interactions. This is only due to the difficulty enzyme has with interacting with
    // react-select.
    // @see https://stackoverflow.com/a/46201546/7304377

    it('should display an error message when a required field is touched', async () => {
      const fieldName = 'favoriteFastFood';
      const validate = () => ({ [fieldName]: 'Required' });

      const wrapper = mount(
        <Formik initialValues={{ [fieldName]: '' }} validate={validate}>
          <Form>
            <Field
              name={fieldName}
              label="Favorite Fast Food Places*"
              options={requiredProps.options}
              component={Select}
            />
          </Form>
        </Formik>,
      );

      const ReactSelect = getReactSelect(wrapper);

      ReactSelect.simulate('blur'); // trigger validation

      await asyncRenderDiff(wrapper);

      expect(wrapper.find('Alert')).toHaveText('Required');
    });

    it('should fire formik-related callbacks when changing non-multi select', async () => {
      const wrapper = mount(<Select {...requiredProps} />);

      const ReactSelect = getReactSelect(wrapper);

      // Simulate the arrow down event to open the dropdown menu.
      ReactSelect.simulate('blur');
      ReactSelect.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
      await asyncRenderDiff(wrapper);

      // Simulate the enter key to select the first option.
      ReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });
      await asyncRenderDiff(wrapper);

      expect(setFieldTouched).toHaveBeenCalledTimes(1);
      expect(setFieldValue).toHaveBeenCalledTimes(1);
    });

    it('should fire formik-related callbacks when changing multi select', async () => {
      const wrapper = mount(
        <Select {...requiredProps} field={{ name: 'test', value: [] }} isMulti />,
      );

      const ReactSelect = getReactSelect(wrapper);

      // down arrow once and enter
      ReactSelect.simulate('blur');
      ReactSelect.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
      await asyncRenderDiff(wrapper);
      ReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });
      await asyncRenderDiff(wrapper);

      // down arrow twice and enter
      ReactSelect.simulate('blur');
      ReactSelect.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
      await asyncRenderDiff(wrapper);
      ReactSelect.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
      await asyncRenderDiff(wrapper);
      ReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });
      await asyncRenderDiff(wrapper);

      expect(setFieldTouched).toHaveBeenCalledTimes(2);
      expect(setFieldValue).toHaveBeenCalledTimes(2);
    });
  });
});
