import React from 'react';
import { Formik, Field } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { render, fireEvent } from '@testing-library/react';

import Form from '../../Form';
import Select from '../Select';

const getReactSelect = domElement => domElement.querySelector('[id^=react-select]');

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
    const { container } = render(<Select {...requiredProps} isLabelHidden />);

    expect(container.querySelectorAll('label').length).toBe(1);
  });

  describe('interactions', () => {
    // You'll notice that interactions with react-select are usually tested via keyboard
    // interactions. This is only due to the difficulty enzyme has with interacting with
    // react-select.
    // @see https://stackoverflow.com/a/46201546/7304377

    it('should display an error message when a required field is touched', async () => {
      const fieldName = 'favoriteFastFood';
      const validate = () => ({ [fieldName]: 'Required' });

      const { container, findByText } = render(
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

      const ReactSelect = getReactSelect(container);
      fireEvent.blur(ReactSelect);

      const alert = await findByText('Required');
      expect(alert).toBeDefined();
    });

    it('should fire formik-related callbacks when changing non-multi select', async () => {
      const { container } = render(<Select {...requiredProps} />);
      const ReactSelect = getReactSelect(container);

      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(ReactSelect, { key: 'Enter', keyCode: 13 });

      expect(setFieldTouched).toHaveBeenCalledTimes(1);
      expect(setFieldValue).toHaveBeenCalledTimes(1);
    });

    it('should fire formik-related callbacks when changing multi select', async () => {
      const { container } = render(
        <Select {...requiredProps} field={{ name: 'test', value: [] }} isMulti />,
      );

      const ReactSelect = getReactSelect(container);

      // down arrow once and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(ReactSelect, { key: 'Enter', keyCode: 13 });

      // down arrow twice and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(ReactSelect, { key: 'Enter', keyCode: 13 });

      expect(setFieldTouched).toHaveBeenCalledTimes(2);
      expect(setFieldValue).toHaveBeenCalledTimes(2);
    });

    it('should be able to remove multiselect options', async () => {
      const { container } = render(
        <Select {...requiredProps} field={{ name: 'test', value: [] }} isMulti />,
      );

      const ReactSelect = getReactSelect(container);

      // down arrow once and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(ReactSelect, { key: 'Enter', keyCode: 13 });

      expect(setFieldValue).toHaveBeenCalledTimes(1);

      // Remove single selected value
      fireEvent.keyDown(ReactSelect, { key: 'Backspace', keyCode: 8 });

      expect(setFieldValue).toHaveBeenNthCalledWith(2, 'test', []);
    });
  });
});
