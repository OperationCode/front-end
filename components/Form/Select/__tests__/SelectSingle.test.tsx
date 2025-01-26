import { Formik, Field } from 'formik';
import { fireEvent, render, waitFor } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { KEY_CODES } from 'test-utils/identifiers';
import noop from 'lodash/noop';
import { LABEL } from 'common/constants/testIDs';
import { describe, afterEach, it, expect, vi } from 'vitest';
import { SelectSingle, SelectSingleProps } from 'components/Form/Select/SelectSingle';
import { getReactSelectInput } from 'components/Form/Select/ThemedReactSelect';
import Form from '../../Form';

const inputName = 'someSelectName';

describe('Select', () => {
  const name = inputName;
  const setFieldTouched = vi.fn();
  const setFieldValue = vi.fn();

  const requiredPropsForSingleSelect: SelectSingleProps = {
    field: {
      name,
      value: '',
      onChange: vi.fn(),
      onBlur: vi.fn(),
    },
    form: {
      touched: { [name]: false },
      errors: { [name]: '' },
      setFieldTouched,
      setFieldValue,
      values: { [name]: '' },
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
        <SelectSingle {...requiredPropsForSingleSelect} />
      </Formik>,
    );
  });

  it('should render with label, even if hidden', () => {
    const { queryAllByTestId } = render(
      <Formik onSubmit={noop} initialValues={{}}>
        <SelectSingle {...requiredPropsForSingleSelect} isLabelHidden />
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
              options={requiredPropsForSingleSelect.options}
              component={SelectSingle}
            />
          </Form>
        </Formik>,
      );

      const ReactSelect = getReactSelectInput(container, fieldName)!;

      fireEvent.blur(ReactSelect);

      const alert = await findByText('Required');
      expect(alert).not.toBeNull();
    });

    it('should fire formik-related callbacks when changing', async () => {
      const { container } = render(
        <Formik onSubmit={noop} initialValues={{}}>
          <SelectSingle {...requiredPropsForSingleSelect} />
        </Formik>,
      );
      const ReactSelect = getReactSelectInput(container, inputName)!;

      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(setFieldTouched).toHaveBeenCalledTimes(1);
        expect(setFieldValue).toHaveBeenCalledTimes(1);
      });
    });
  });
});
