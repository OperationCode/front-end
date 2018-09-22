import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { googleAnalyticsEventPropType } from 'common/constants/custom-props';
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
    theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
  };

  static defaultProps = {
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

  clickHandler = () => {
    const { props } = this;

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event(props.analyticsObject);
    } else {
      // eslint-disable-next-line no-console
      console.log('Analytics Disabled', props.analyticsObject);
    }

    return props.onClick;
  };

  render() {
    const { props } = this;

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
      >
        {/* Render text nodes within a span to apply selector styles */}
        {typeof props.children === 'string' ? <span>{props.children}</span> : props.children}
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

export default Button;
