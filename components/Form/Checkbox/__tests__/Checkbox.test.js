import React from 'react';
import { Formik, Field } from 'formik';
import { fireEvent, render } from '@testing-library/react';
import { CHECKBOX, CHECKBOX_ERROR, CHECKBOX_GROUPING, LABEL } from 'common/constants/testIDs';
import { validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Form from '../../Form';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  const requiredProps = {
    field: {
      name: 'someInputName',
    },
    form: { touched: { someInputName: false }, errors: { someInputName: '' } },
    onBlur: jest.fn(),
    onChange: jest.fn(),
    label: 'Some Input:',
  };

  it('should render with required props', () => {
    createSnapshotTest(
      <Formik>
        <Checkbox {...requiredProps} />
      </Formik>,
    );
  });

  it('should render with label, even if hidden', () => {
    const component = render(
      <Formik>
        <Checkbox {...requiredProps} isLabelHidden />
      </Formik>,
    );

    expect(component.container.querySelectorAll('label').length).toBe(1);
  });

  it('should display an error message when a required field is touched', async () => {
    const label = 'label';
    const validate = () => ({ test: 'Required' });

    const component = render(
      <Formik validate={validate}>
        <Form>
          <Field id="test" name="test" label={label} component={Checkbox} />,
        </Form>
      </Formik>,
    );

    fireEvent.blur(component.queryByLabelText(label));

    const Alert = await component.findByTestId(CHECKBOX_ERROR);
    expect(Alert.textContent).toBe(validationErrorMessages.required);
  });

  it('should render the label after the input for checkbox inputs', () => {
    const component = render(
      <Formik>
        <Checkbox {...requiredProps} type="checkbox" />
      </Formik>,
    );
    const CheckboxElement = component.queryByTestId(CHECKBOX);
    const CheckboxGrouping = component.queryByTestId(CHECKBOX_GROUPING);
    const Label = component.queryByTestId(LABEL);

    // Selectors are rendered
    expect(CheckboxGrouping).not.toBeNull();
    expect(Label).not.toBeNull();

    // Grouping has input element
    expect(CheckboxGrouping.firstChild).toBe(component.container.querySelector('input'));

    // Assert ordering
    expect(CheckboxElement.childNodes[0]).toBe(CheckboxGrouping);
    expect(CheckboxElement.childNodes[1]).toBe(Label);
  });
});
