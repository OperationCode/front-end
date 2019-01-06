import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { googleAnalyticsEventPropType } from 'common/constants/custom-props';
import { getDataAttributes, getAriaAttributes } from 'common/utils/prop-utils';
import styles from './Button.css';

class Button extends Component {
  static propTypes = {
    analyticsObject: googleAnalyticsEventPropType,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
<<<<<<< HEAD
    theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
=======
    theme: PropTypes.oneOf(['primary', 'secondary']),
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    datum: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    analyticsObject: {
      action: 'Button Selected',
      category: 'Interactions',
    },
<<<<<<< HEAD
    className: '',
=======
    className: undefined,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    datum: '',
    disabled: false,
    fullWidth: false,
    onClick: () => {},
    tabIndex: 0,
    theme: 'primary',
    type: 'button',
  };

  clickHandler = () => {
    const { props } = this;

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event(props.analyticsObject);
    } else {
      // eslint-disable-next-line no-console
      console.log('Analytics Disabled', props.analyticsObject);
    }
    props.onClick();
  };

  render() {
    const { props } = this;
    const customDataAttributes = getDataAttributes(props);
    const ariaAttributes = getAriaAttributes(props);
<<<<<<< HEAD
=======

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    /* eslint-disable react/button-has-type */
    return (
      <button
        className={classNames(styles.Button, props.className, styles[props.theme], {
          [styles.disabled]: props.disabled,
          [styles.fullWidth]: props.fullWidth,
        })}
        disabled={props.disabled}
        onClick={this.clickHandler}
        tabIndex={props.tabIndex}
        type={props.type}
        {...customDataAttributes}
        {...ariaAttributes}
      >
<<<<<<< HEAD
        {/* Render text nodes within a span to apply selector styles */}
        {typeof props.children === 'string' ? <span>{props.children}</span> : props.children}
=======
        {props.children}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

export default Button;
