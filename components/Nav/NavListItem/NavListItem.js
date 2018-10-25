import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PlusIcon from 'static/images/icons/plus.svg';
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
    showSublinks: false,
  };

  onTab = event => {
    if (event.keyCode === 9) {
      this.toggleSublinkVisibility();
    }
  };

  toggleSublinkVisibility = () => {
    this.setState(prevState => ({ showSublinks: !prevState.showSublinks }));
  };

  render() {
    const { props, state } = this;

    const hasSublinks = props.sublinks.length > 0;

    return (
      <li className={styles.NavListItem}>
        <Link href={props.href} prefetch={props.shouldPrefetch}>
          <a
            className={classNames(styles.link, {
              [styles.donateLink]: props.name === 'Donate',
            })}
            onFocus={this.toggleSublinkVisibility}
            onKeyDown={this.onTab}
            onMouseEnter={this.toggleSublinkVisibility}
            onMouseLeave={this.toggleSublinkVisibility}
            role="link"
            tabIndex={0}
          >
            <span className={styles.linkContent}>
              {hasSublinks && <PlusIcon className={styles.plusIcon} />}
              {props.name}
            </span>
          </a>
        </Link>

        {state.showSublinks &&
          hasSublinks && (
            <ul
              className={styles.sublinks}
              onMouseEnter={this.toggleSublinkVisibility}
              onMouseLeave={this.toggleSublinkVisibility}
            >
              {props.sublinks.map(sublink => (
                <li className={styles.SublinkItem} key={sublink.name}>
                  <Link href={sublink.href}>
                    <a className={styles.link}>{sublink.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
      </li>
    );
  }
}
