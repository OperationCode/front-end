import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { arrayOf, bool, shape, string } from 'prop-types';
import PlusIcon from 'static/images/icons/plus.svg';
import MinusIcon from 'static/images/icons/minus.svg';
import styles from './NavListItem.css';

export default class NavListItem extends Component {
  static propTypes = {
    href: string.isRequired,
    name: string.isRequired,
    shouldPrefetch: bool,
    sublinks: arrayOf(
      shape({
        name: string.isRequired,
        href: string.isRequired,
        shouldPrefetch: bool,
      }),
    ),
  };

  static defaultProps = {
    shouldPrefetch: false,
    sublinks: [],
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
    this.setState(previousState => ({ areSublinksVisible: !previousState.areSublinksVisible }));
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
            data-testid={`Nav Item ${props.name}`}
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
                  <Link href={sublink.href} prefetch={sublink.shouldPrefetch || false}>
                    <a
                      className={styles.link}
                      key={sublink.name}
                      role="link"
                      tabIndex={0}
                      data-testid={`Nav Item ${sublink.name}`}
                    >
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
