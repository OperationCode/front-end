import React from 'react';
import { Formik, Field } from 'formik';
import { fireEvent, render, wait } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { KEY_CODES } from 'test-utils/identifiers';

import { LABEL } from 'common/constants/testIDs';
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

  afterEach(() => {
    setFieldTouched.mockReset();
    setFieldValue.mockReset();
  });

  it('should render with required props', () => {
    createSnapshotTest(<Select {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const { queryAllByTestId } = render(<Select {...requiredProps} isLabelHidden />);

    expect(queryAllByTestId(LABEL).length).toBe(1);
  });

  describe('interactions', () => {
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
      expect(alert).not.toBeNull();
    });

    it('should fire formik-related callbacks when changing non-multi select', async () => {
      const { container } = render(<Select {...requiredProps} />);
      const ReactSelect = getReactSelect(container);

      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await wait(() => {
        expect(setFieldTouched).toHaveBeenCalledTimes(1);
        expect(setFieldValue).toHaveBeenCalledTimes(1);
      });
    });

    it('should fire formik-related callbacks when changing multi select', async () => {
      const { container } = render(
        <Select {...requiredProps} field={{ name: 'test', value: [] }} isMulti />,
      );

      const ReactSelect = getReactSelect(container);

      // down arrow once and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      // down arrow twice and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await wait(() => {
        expect(setFieldTouched).toHaveBeenCalledTimes(2);
        expect(setFieldValue).toHaveBeenCalledTimes(2);
      });
    });

    it('should be able to remove multiselect options', async () => {
      const { container } = render(
        <Select {...requiredProps} field={{ name: 'test', value: [] }} isMulti />,
      );

      const ReactSelect = getReactSelect(container);

      // down arrow once and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await wait(() => {
        expect(setFieldValue).toHaveBeenCalledTimes(1);
      });

      // Remove single selected value
      fireEvent.keyDown(ReactSelect, KEY_CODES.BACKSPACE);

      await wait(() => {
        expect(setFieldValue).toHaveBeenNthCalledWith(2, 'test', []);
      });
    });
  });
});
