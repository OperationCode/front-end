import { cleanup, render } from '@testing-library/react';
import { INPUT, INPUT_FEEDBACK_GROUPING, LABEL } from '@/lib/constants/testIDs';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

import Input from '../Input';

describe('Input', () => {
  const requiredProps = {
    name: 'someInputName',
    label: 'Some Input:',
  };

  it('should render with required props', () => {
    createSnapshotTest(<Input {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const component = render(<Input {...requiredProps} isLabelHidden />);

    expect(component.container.querySelectorAll('label').length).toBe(1);
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
    expect(InputFeedbackGrouping!.firstChild).toBe(component.container.querySelector('input'));

    // Assert ordering
    expect(Radio!.childNodes[0]).toBe(InputFeedbackGrouping);
    expect(Radio!.childNodes[1]).toBe(Label);
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

    otherInputTypes.forEach((inputType) => {
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
      expect(InputFeedbackGrouping!.firstChild).toBe(container.querySelector('input'));

      // Assert ordering
      expect(SomeInput!.childNodes[0]).toBe(Label);
      expect(SomeInput!.childNodes[1]).toBe(InputFeedbackGrouping);

      // The iteration seems to happen faster than the tests...
      unmount();
      cleanup();
    });
  });
});
