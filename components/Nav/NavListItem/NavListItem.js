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

  function KeyDown = () => {
    const sublink = document.QuerySelectorAll('li.NavListItem');
    Array.prototype.forEach.call(sublink, function(element) {
      const anchor = document.el.querySelector('a');
      const b = `<button><span><span class="hideSublinks">" ${anchor.text}"</span></span></button>`;
      anchor.insertAdjacentHTML('afterend', b);

      element.querySelector('button').addEventListener('click', function(event) {
        if (this.parentNode.className === 'NavListItem') {
          this.parentNode.className = 'NavListItem aria-expanded';
          this.parentNode.querySelector('a').setAttribute('aria-expanded', 'true');
          this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');
        } else {
          this.parentNode.className = 'NavListItem';
          this.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');
          this.parentNode.querySelector('button').setAttribute('aria-expanded', 'false');
        }
        event.PreventDefault();
      });
    });
  };

  render() {
    const { props, state } = this;

    const hasSublinks = props.sublinks.length > 0;

    return (
      <li className={styles.NavListItem}>
        <Link href={props.href} prefetch={props.shouldPrefetch}>
          <a
            className={classNames(styles.link, styles.navItemLink)}
            onMouseEnter={this.showSublinks}
            onMouseLeave={this.hideSublinks}
            role="link"
            onKeyDown={this.hideSublinks}
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
              aria-haspopup={hasSublinks}
              aria-label="submenu"
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
                      onKeyDown={this.onKeyPressed}
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
