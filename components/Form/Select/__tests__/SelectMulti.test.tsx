import { Formik, Field } from 'formik';
import { fireEvent, render, waitFor } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { KEY_CODES } from 'test-utils/identifiers';
import noop from 'lodash/noop';
import { LABEL } from 'common/constants/testIDs';
import { describe, afterEach, it, expect, vi } from 'vitest';
import { getReactSelectInput } from 'components/Form/Select/ThemedReactSelect';
import Form from '../../Form';
import { SelectMulti, SelectMultiProps } from '../SelectMulti';

describe('Select', () => {
  const name = 'someSelectName';
  const setFieldTouched = vi.fn();
  const setFieldValue = vi.fn();

  const requiredPropsForMultiSelect: SelectMultiProps = {
    field: {
      name,
      value: [] as string[],
      onChange: vi.fn(),
      onBlur: vi.fn(),
    },
    form: {
      touched: { [name]: false },
      errors: { [name]: '' },
      setFieldTouched,
      setFieldValue,
      values: { [name]: [] as string[] },
      isSubmitting: false,
      isValidating: false,
      submitCount: 0,
      setStatus: vi.fn(),
      setErrors: vi.fn(),
      setSubmitting: vi.fn(),
      setTouched: vi.fn(),
      setValues: vi.fn(),
      setFieldError: vi.fn(),
      validateForm: vi.fn(),
      validateField: vi.fn(),
      resetForm: vi.fn(),
      submitForm: vi.fn(),
      setFormikState: vi.fn(),
    },
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
    createSnapshotTest(
      <Formik onSubmit={noop} initialValues={{}}>
        <SelectMulti {...requiredPropsForMultiSelect} />
      </Formik>,
    );
  });

  it('should render with label, even if hidden', () => {
    const { queryAllByTestId } = render(
      <Formik onSubmit={noop} initialValues={{}}>
        <SelectMulti {...requiredPropsForMultiSelect} isLabelHidden />
      </Formik>,
    );

    expect(queryAllByTestId(LABEL).length).toBe(1);
  });

  describe('interactions', () => {
    it('should display an error message when a required field is touched', async () => {
      const fieldName = 'favoriteFastFood';
      const validate = () => ({ [fieldName]: 'Required' });

      const { container, findByText } = render(
        <Formik initialValues={{ [fieldName]: '' }} validate={validate} onSubmit={noop}>
          <Form>
            <Field
              name={fieldName}
              label="Favorite Fast Food Places*"
              options={requiredPropsForMultiSelect.options}
              component={SelectMulti}
            />
          </Form>
        </Formik>,
      );

      const ReactSelect = getReactSelectInput(container, fieldName)!;

      fireEvent.blur(ReactSelect);

      const alert = await findByText('Required');
      expect(alert).not.toBeNull();
    });

    it('should fire formik-related callbacks when changing non-multi select', async () => {
      const { container } = render(
        <Formik onSubmit={noop} initialValues={{}}>
          <SelectMulti {...requiredPropsForMultiSelect} />
        </Formik>,
      );
      const ReactSelect = getReactSelectInput(container, name)!;

      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(setFieldTouched).toHaveBeenCalledTimes(1);
        expect(setFieldValue).toHaveBeenCalledTimes(1);
      });
    });

    it('should fire formik-related callbacks when changing multi select', async () => {
      const { container } = render(
        <Formik onSubmit={noop} initialValues={{}}>
          <SelectMulti {...requiredPropsForMultiSelect} />
        </Formik>,
      );

      const ReactSelect = getReactSelectInput(container, name)!;

      // down arrow once and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      // down arrow twice and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(setFieldTouched).toHaveBeenCalledTimes(2);
        expect(setFieldValue).toHaveBeenCalledTimes(2);
      });
    });

    it('should be able to remove multiselect options', async () => {
      const { container } = render(
        <Formik onSubmit={noop} initialValues={{}}>
          <SelectMulti {...requiredPropsForMultiSelect} />
        </Formik>,
      );

      const ReactSelect = getReactSelectInput(container, name)!;

      // down arrow once and enter
      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(setFieldValue).toHaveBeenCalledTimes(1);
      });

      // Remove single selected value
      fireEvent.keyDown(ReactSelect, KEY_CODES.BACKSPACE);

      await waitFor(() => {
        expect(setFieldValue).toHaveBeenNthCalledWith(2, name, []);
      });
    });
  });
});
