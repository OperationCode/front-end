import { cx } from 'common/utils/cva';
import { LABEL } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  ['data-testid']?: string;
  isHidden?: boolean;
}

function Label({
  children,
  className,
  'data-testid': testID = LABEL,
  isHidden,
  ...props
}: LabelProps) {
  const TheLabel = (
    <label className={cx('text-secondary text-sm', className)} data-testid={testID} {...props}>
      {children}
    </label>
  );

  return isHidden ? <ScreenReaderOnly>{TheLabel}</ScreenReaderOnly> : TheLabel;
}

export default Label;
