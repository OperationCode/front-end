import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, afterEach, it, expect, vi } from 'vitest';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { KEY_CODES } from '@/test-utils/identifiers';
import { LABEL } from '@/lib/constants/testIDs';
import type { SelectSingleProps } from '@/components/Form/Select/SelectSingle';
import { SelectSingle } from '@/components/Form/Select/SelectSingle';
import { getReactSelectInput } from '@/components/Form/Select/ThemedReactSelect';

const name = 'someSelectName';

describe('Select', () => {
  const onChange = vi.fn();
  const onBlur = vi.fn();

  const requiredProps: SelectSingleProps = {
    name,
    value: '',
    onChange,
    onBlur,
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
    onChange.mockReset();
    onBlur.mockReset();
  });

  it('should render with required props', () => {
    createSnapshotTest(<SelectSingle {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const { queryAllByTestId } = render(<SelectSingle {...requiredProps} isLabelHidden />);

    expect(queryAllByTestId(LABEL).length).toBe(1);
  });

  describe('interactions', () => {
    it('should display an error message when touched with an error', () => {
      const { getByText } = render(<SelectSingle {...requiredProps} error="Required" isTouched />);

      expect(getByText('Some Select:')).not.toBeNull();
    });

    it('should fire callbacks when changing', async () => {
      const { container } = render(<SelectSingle {...requiredProps} />);
      const ReactSelect = getReactSelectInput(container, name)!;

      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledTimes(1);
      });
    });
  });
});
