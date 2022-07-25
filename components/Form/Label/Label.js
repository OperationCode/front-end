import { node, string, bool } from 'prop-types';
import classNames from 'classnames';
import { LABEL } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Label.module.css';

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

function Label({ children, className, 'data-testid': testID, isHidden, ...props }) {
  const TheLabel = (
    <label
      // for isnt destructured because it's a reserved word in JavaScript
      // eslint-disable-next-line react/destructuring-assignment
      htmlFor={props.for}
      className={classNames(styles.Label, className)}
      data-testid={testID}
    >
      {children}
    </label>
  );

  return isHidden ? <ScreenReaderOnly>{TheLabel}</ScreenReaderOnly> : TheLabel;
}

export default Label;
