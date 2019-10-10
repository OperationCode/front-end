import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { arrayOf, bool, shape, string } from 'prop-types';
import PlusIcon from 'static/images/icons/plus.svg';
import MinusIcon from 'static/images/icons/minus.svg';
import styles from './NavListItem.css';

const NavListItem = ({ sublinks, href, shouldPrefetch, name }) => {
  const [areSublinksVisible, changeSublinkVisibility] = useState(false);

  const handleKeyDown = (event, indexKeyedOn) => {
    const lastSublinkIndex = sublinks.length - 1;
    const isLastSublink = indexKeyedOn === lastSublinkIndex;
    const isFirstSublink = indexKeyedOn === 0;

    const didHitTab = event.key === 'Tab';
    const didTabForward = didHitTab && !event.shiftKey;
    const didTabBackward = didHitTab && event.shiftKey;

    const shouldHideSublinks =
      (isLastSublink && didTabForward) || (isFirstSublink && didTabBackward);

    if (shouldHideSublinks) {
      changeSublinkVisibility(false);
    }
  };

  const hasSublinks = sublinks.length > 0;

  return (
    <li className={styles.NavListItem}>
      <Link href={href} prefetch={shouldPrefetch}>
        <a
          className={classNames(styles.link, styles.navItemLink)}
          onMouseEnter={() => changeSublinkVisibility(true)}
          onMouseLeave={() => changeSublinkVisibility(false)}
          role="link"
          tabIndex={0}
          data-testid={`Nav Item ${name}`}
        >
          <span className={styles.linkContent}>{name}</span>
        </a>
      </Link>

      {hasSublinks && (
        <>
          <button
            aria-expanded={areSublinksVisible}
            aria-haspopup={hasSublinks}
            aria-label="submenu"
            className={styles.sublinkToggleButton}
            onClick={() => changeSublinkVisibility(!areSublinksVisible)}
            onMouseEnter={() => changeSublinkVisibility(true)}
            onMouseLeave={() => changeSublinkVisibility(false)}
            type="button"
          >
            {areSublinksVisible ? (
              <MinusIcon className={styles.icon} data-testid="minus-icon" />
            ) : (
              <PlusIcon className={styles.icon} data-testid="plus-icon" />
            )}
          </button>

          <ul
            className={classNames(styles.sublinksList, {
              [styles.invisible]: !areSublinksVisible,
            })}
            onMouseEnter={() => changeSublinkVisibility(true)}
            onMouseLeave={() => changeSublinkVisibility(false)}
          >
            {sublinks.map((sublink, index) => (
              <li className={styles.sublinkListItem} key={sublink.name}>
                <Link href={sublink.href} prefetch={sublink.shouldPrefetch || false}>
                  <a
                    className={styles.link}
                    key={sublink.name}
                    role="link"
                    tabIndex={0}
                    data-testid={`Nav Item ${sublink.name}`}
                    onKeyDown={event => handleKeyDown(event, index)}
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
};

NavListItem.propTypes = {
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

NavListItem.defaultProps = {
  shouldPrefetch: false,
  sublinks: [],
};

export default NavListItem;
