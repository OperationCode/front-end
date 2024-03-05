import classNames from 'classnames';
import { LABEL } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';

export type LabelPropsType = {
  /**
   * Content to be rendered as the label.
   */
  children: React.ReactNode;
  /**
   * Applies a name for the input element.
   */
  for: string;
  /**
   * Applies classnames to the base `label` element for styling.
   */
  className?: string;
  /**
   * Applies a data-testid to the base `label` element for testing.
   */
  'data-testid'?: string;
  /**
   * Sets if the label is hidden or not.
   */
  isHidden?: boolean;
};

function Label({
  children,
  className,
  'data-testid': testID = LABEL,
  isHidden = false,
  ...props
}: LabelPropsType) {
  const TheLabel = (
    <label
      // for isnt destructured because it's a reserved word in JavaScript
      // eslint-disable-next-line react/destructuring-assignment
      htmlFor={props.for}
      className={classNames('text-themeSecondary text-sm', className)}
      data-testid={testID}
    >
      {children}
    </label>
  );

  return isHidden ? <ScreenReaderOnly>{TheLabel}</ScreenReaderOnly> : TheLabel;
}

export default Label;
