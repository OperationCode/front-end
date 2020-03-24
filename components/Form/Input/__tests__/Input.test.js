import React from 'react';
import { Formik, Field } from 'formik';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { INPUT, INPUT_ERROR, INPUT_FEEDBACK_GROUPING, LABEL } from 'common/constants/testIDs';
import { validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Form from '../../Form';
import Input from '../Input';

describe('Input', () => {
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
    createSnapshotTest(<Input {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const component = render(<Input {...requiredProps} isLabelHidden />);

    expect(component.container.querySelectorAll('label').length).toBe(1);
  });

  it('should display an error message when a required field is touched', async () => {
    const label = 'label';
    const validate = () => ({ test: 'Required' });

    const component = render(
      <Formik validate={validate}>
        <Form>
          <Field id="test" name="test" label={label} component={Input} />,
        </Form>
      </Formik>,
    );

    fireEvent.blur(component.queryByLabelText(label));

    const Alert = await component.findByTestId(INPUT_ERROR);
    expect(Alert.textContent).toBe(validationErrorMessages.required);
  });

  it('should render the label after the input for checkbox inputs', () => {
    const component = render(<Input {...requiredProps} type="checkbox" />);

    const Checkbox = component.queryByTestId(INPUT);

    const InputFeedbackGrouping = component.queryByTestId(INPUT_FEEDBACK_GROUPING);
    const Label = component.queryByTestId(LABEL);

    // Selectors are rendered
    expect(InputFeedbackGrouping).not.toBeNull();
    expect(Label).not.toBeNull();

    // Grouping has input element
    expect(InputFeedbackGrouping.firstChild).toBe(component.container.querySelector('input'));

    // Assert ordering
    expect(Checkbox.childNodes[0]).toBe(InputFeedbackGrouping);
    expect(Checkbox.childNodes[1]).toBe(Label);
  });

  it('should render the label after the input for radio inputs', () => {
    const component = render(<Input {...requiredProps} type="radio" />);

    const Radio = component.queryByTestId(INPUT);

    const InputFeedbackGrouping = component.queryByTestId(INPUT_FEEDBACK_GROUPING);
    const Label = component.queryByTestId(LABEL);

    // Selectors are rendered
    expect(InputFeedbackGrouping).not.toBeNull();
    expect(Label).not.toBeNull();

    // Grouping has input element
    expect(InputFeedbackGrouping.firstChild).toBe(component.container.querySelector('input'));

    // Assert ordering
    expect(Radio.childNodes[0]).toBe(InputFeedbackGrouping);
    expect(Radio.childNodes[1]).toBe(Label);
  });

  it('should render the label before the input for all other input types', () => {
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

    // enforce list correctness
    expect(otherInputTypes).not.toContain('radio');
    expect(otherInputTypes).not.toContain('checkbox');

    otherInputTypes.forEach(inputType => {
      const { container, queryByTestId, unmount } = render(
        <Input {...requiredProps} type={inputType} />,
      );

      const SomeInput = queryByTestId(INPUT);

      const InputFeedbackGrouping = queryByTestId(INPUT_FEEDBACK_GROUPING);
      const Label = queryByTestId(LABEL);

      // Selectors are rendered
      expect(InputFeedbackGrouping).not.toBeNull();
      expect(Label).not.toBeNull();

      // Grouping has input element
      expect(InputFeedbackGrouping.firstChild).toBe(container.querySelector('input'));

      // Assert ordering
      expect(SomeInput.childNodes[0]).toBe(Label);
      expect(SomeInput.childNodes[1]).toBe(InputFeedbackGrouping);

      // The iteration seems to happen faster than the tests...
      unmount();
      cleanup();
    });
  });
});
