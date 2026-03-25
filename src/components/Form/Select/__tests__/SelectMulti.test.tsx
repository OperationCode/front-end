import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, afterEach, it, expect, vi } from 'vitest';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { KEY_CODES } from '@/test-utils/identifiers';
import { LABEL } from '@/lib/constants/testIDs';
import { getReactSelectInput } from '@/components/Form/Select/ThemedReactSelect';
import type { SelectMultiProps } from '../SelectMulti';
import { SelectMulti } from '../SelectMulti';

const name = 'someSelectName';

describe('Select', () => {
  const onChange = vi.fn();
  const onBlur = vi.fn();

  const requiredProps: SelectMultiProps = {
    name,
    value: [],
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
    createSnapshotTest(<SelectMulti {...requiredProps} />);
  });

  it('should render with label, even if hidden', () => {
    const { queryAllByTestId } = render(<SelectMulti {...requiredProps} isLabelHidden />);

    expect(queryAllByTestId(LABEL).length).toBe(1);
  });

  describe('interactions', () => {
    it('should display an error message when touched with an error', () => {
      const { getByText } = render(<SelectMulti {...requiredProps} error="Required" isTouched />);

      expect(getByText('Some Select:')).not.toBeNull();
    });

    it('should fire callbacks when selecting an option', async () => {
      const { container } = render(<SelectMulti {...requiredProps} />);
      const ReactSelect = getReactSelectInput(container, name)!;

      fireEvent.blur(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledTimes(1);
      });
    });

    it('should fire callbacks when selecting multiple options', async () => {
      const { container } = render(<SelectMulti {...requiredProps} />);
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
        expect(onBlur).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenCalledTimes(2);
      });
    });

    it('should call onChange with selected options', async () => {
      const { container } = render(<SelectMulti {...requiredProps} />);
      const ReactSelect = getReactSelectInput(container, name)!;

      fireEvent.focus(ReactSelect);
      fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
      fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0]?.[0]).toStrictEqual(
          expect.arrayContaining([expect.objectContaining({ label: expect.any(String) })]),
        );
      });
    });
  });
});
