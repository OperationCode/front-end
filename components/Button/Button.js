import React from 'react';
import { any, bool, func, node, number, oneOf, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { BUTTON } from 'common/constants/testIDs';
import { googleAnalyticsEventPropType } from 'common/constants/custom-props';
import { getDataAttributes, getAriaAttributes } from 'common/utils/prop-utils';
import styles from './Button.module.css';

Button.propTypes = {
  analyticsObject: googleAnalyticsEventPropType,
  children: oneOfType([node, string]).isRequired,
  className: string,
  disabled: bool,
  fullWidth: bool,
  onClick: func,
  tabIndex: oneOfType([string, number]),
  theme: oneOf(['primary', 'secondary']),
  type: oneOf(['button', 'reset', 'submit']),
  datum: any, // eslint-disable-line react/forbid-prop-types
};

Button.defaultProps = {
  analyticsObject: {
    action: 'Button Selected',
    category: 'Interactions',
  },
  className: undefined,
  datum: '',
  disabled: false,
  fullWidth: false,
  onClick: () => {},
  tabIndex: 0,
  theme: 'primary',
  type: 'button',
};

export default function Button({
  analyticsObject,
  children,
  className,
  disabled,
  fullWidth,
  onClick,
  tabIndex,
  theme,
  type,
  ...rest
}) {
  const customDataAttributes = getDataAttributes(rest);
  const ariaAttributes = getAriaAttributes(rest);

  const clickHandler = () => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.event(analyticsObject);
    } else {
      // eslint-disable-next-line no-console
      console.log('Analytics Disabled', analyticsObject);
    }
    onClick();
  };

  /* eslint-disable react/button-has-type */
  return (
    <button
      className={classNames(styles.Button, className, styles[theme], {
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
      })}
      data-testid={BUTTON}
      disabled={disabled}
      onClick={clickHandler}
      tabIndex={tabIndex}
      type={type}
      {...customDataAttributes}
      {...ariaAttributes}
    >
      {children}
    </button>
  );
  /* eslint-enable react/button-has-type */
}
