import { node, string, bool } from 'prop-types';
import { cx } from 'common/utils/cva';
import { LABEL } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import type { PropsWithChildren } from 'react';

Label.propTypes = {
  children: node.isRequired,
  className: string,
  'data-testid': string,
  for: string.isRequired,
  isHidden: bool, // visually hides the label, but maintains accessibility
};

Label.defaultProps = {
  className: undefined,
  'data-testid': LABEL,
  isHidden: false,
};

export interface LabelProps
  extends PropsWithChildren<{
    className?: string;
    ['data-testid']?: string;
    isHidden?: boolean;
    for: string;
  }> {}

function Label({ children, className, 'data-testid': testID, isHidden, ...props }: LabelProps) {
  const TheLabel = (
    <label
      // for isnt destructured because it's a reserved word in JavaScript
      // eslint-disable-next-line react/destructuring-assignment
      htmlFor={props.for}
      className={cx('text-secondary text-sm', className)}
      data-testid={testID}
    >
      {children}
    </label>
  );

  return isHidden ? <ScreenReaderOnly>{TheLabel}</ScreenReaderOnly> : TheLabel;
}

export default Label;
