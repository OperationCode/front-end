import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
import styles from 'components/_common_/Button/Button.css';

class ScrollButton extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
  };

  static defaultProps = {
    className: undefined,
    fullWidth: false,
    onClick: () => {},
    tabIndex: 0,
    theme: 'primary',
  };

  clickHandler = () => {
    const { props } = this;
    if (process.env.NODE_ENV === 'production') {
      ScrollEvent.scrollEvent.register('begin', () => {
        ReactGA.event({
          category: 'Interactions',
          action: 'Clicked Scroll Button',
          label: `To [${props.href}]`,
        });
      });
    } else {
      // eslint-disable-next-line no-console
      console.log(`Analytics disabled. <ScrollButton> clicked.`);
    }

    return props.onClick;
  };

  render() {
    const { props } = this;

    return (
      <ScrollLink
        className={classNames(styles.Button, props.className, styles[props.theme], {
          [styles.fullWidth]: props.fullWidth,
        })}
        duration={400}
        onClick={this.clickHandler}
        smooth
        tabIndex={props.tabIndex}
        to={props.href}
      >
        {/* Render text nodes within a span to apply selector styles */}
        {typeof props.children === 'string' ? <span>{props.children}</span> : props.children}
      </ScrollLink>
    );
  }
}

export default ScrollButton;
