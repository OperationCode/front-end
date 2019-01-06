import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PlusIcon from 'static/images/icons/plus.svg';
import MinusIcon from 'static/images/icons/minus.svg';
import styles from './NavListItem.css';

export default class NavListItem extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    shouldPrefetch: PropTypes.bool.isRequired,
    sublinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    areSublinksVisible: false,
  };

  hideSublinks = () => {
    this.setState({ areSublinksVisible: false });
  };

  showSublinks = () => {
    this.setState({ areSublinksVisible: true });
  };

  toggleSublinkVisibility = () => {
    this.setState(prevState => ({ areSublinksVisible: !prevState.areSublinksVisible }));
  };

  render() {
    const { props, state } = this;

    const hasSublinks = props.sublinks.length > 0;

    return (
      <li className={styles.NavListItem}>
        <Link href={props.href} prefetch={props.shouldPrefetch}>
          <a
            aria-expanded={state.areSublinksVisible}
            aria-haspopup={hasSublinks}
            className={classNames(styles.link, styles.navItemLink)}
            onMouseEnter={this.showSublinks}
            onMouseLeave={this.hideSublinks}
            role="link"
            tabIndex={0}
          >
            <span className={styles.linkContent}>{props.name}</span>
          </a>
        </Link>

        {hasSublinks && (
          <>
            <button
              aria-expanded={state.areSublinksVisible}
              className={styles.sublinkToggleButton}
              onClick={this.toggleSublinkVisibility}
              onMouseEnter={this.showSublinks}
              onMouseLeave={this.hideSublinks}
              type="button"
            >
              {state.areSublinksVisible ? (
                <MinusIcon className={styles.icon} data-testid="minus-icon" />
              ) : (
                <PlusIcon className={styles.icon} data-testid="plus-icon" />
              )}
            </button>

            <ul
              className={classNames(styles.sublinksList, {
                [styles.invisible]: !state.areSublinksVisible,
              })}
              onMouseEnter={this.showSublinks}
              onMouseLeave={this.hideSublinks}
            >
              {props.sublinks.map(sublink => (
                <li className={styles.sublinkListItem} key={sublink.name}>
                  <Link href={sublink.href}>
                    <a className={styles.link} key={sublink.name} role="link" tabIndex={0}>
                      <span className={styles.linkContent}>{sublink.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    );
  }
}
