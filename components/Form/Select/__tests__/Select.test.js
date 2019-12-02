import React from 'react';
import { Formik, Field } from 'formik';
import { act, fireEvent, render, wait } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { KEY_CODES } from 'test-utils/identifiers';
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

      await act(async () => {
        await fireEvent.blur(ReactSelect);
      });

      const alert = await findByText('Required');
      expect(alert).not.toBeNull();
    });

    it('should fire formik-related callbacks when changing non-multi select', async () => {
      const { container } = render(<Select {...requiredProps} />);
      const ReactSelect = getReactSelect(container);

      await act(async () => {
        await fireEvent.blur(ReactSelect);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);
      });

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

      await act(async () => {
        // down arrow once and enter
        await fireEvent.blur(ReactSelect);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

        // down arrow twice and enter
        await fireEvent.blur(ReactSelect);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);
      });

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

      await act(async () => {
        // down arrow once and enter
        await fireEvent.blur(ReactSelect);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
        await fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);
      });

      await wait(() => {
        expect(setFieldValue).toHaveBeenCalledTimes(1);
      });

      await act(async () => {
        // Remove single selected value
        await fireEvent.keyDown(ReactSelect, KEY_CODES.BACKSPACE);
      });

      await wait(() => {
        expect(setFieldValue).toHaveBeenNthCalledWith(2, 'test', []);
      });
    });
  });
});
