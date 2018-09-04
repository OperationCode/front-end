import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { googleAnalyticsEventPropType } from 'common/constants/custom-props';
import styles from './Button.css';

Button.propTypes = {
  analyticsObject: googleAnalyticsEventPropType,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  analyticsObject: {
    category: 'Interactions',
    action: 'Button Selected',
  },
  className: '',
  disabled: false,
  fullWidth: false,
  onClick: undefined,
  tabIndex: 0,
  theme: 'primary',
  type: 'button',
};

function Button({
  analyticsObject,
  className,
  children,
  disabled,
  fullWidth,
  onClick,
  tabIndex,
  theme,
  type,
}) {
  const onClickHandler = () => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.event(analyticsObject);
    } else {
      // eslint-disable-next-line no-console
      console.log('Analytics Disabled', analyticsObject);
    }

    return onClick;
  };

  /* eslint-disable react/button-has-type */
  return (
    <button
      className={classNames(styles.Button, className, styles[theme], {
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
      })}
      disabled={disabled}
      onClick={onClickHandler}
      tabIndex={tabIndex}
      type={type}
    >
      {/* Render text nodes within a span to apply selector styles */}
      {typeof children === 'string' ? <span>{children}</span> : children}
    </button>
  );
  /* eslint-enable react/button-has-type */
}

export default Button;
