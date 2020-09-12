import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { arrayOf, shape, string, element } from 'prop-types';
import PlusIcon from 'static/images/icons/plus.svg';
import MinusIcon from 'static/images/icons/minus.svg';
import styles from './NavListItem.module.css';

NavListItem.propTypes = {
  href: string.isRequired,
  name: string.isRequired,
  sublinks: arrayOf(
    shape({
      name: string.isRequired,
      href: string.isRequired,
    }),
  ),
  icon: element,
};

NavListItem.defaultProps = {
  sublinks: [],
  icon: null,
};

function NavListItem({ sublinks, href, name, icon }) {
  const [areSublinksVisible, setSublinksVisible] = useState(false);

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
      setSublinksVisible(false);
    }
  };

  const hasSublinks = sublinks.length > 0;
  const exposeSublinks = () => setSublinksVisible(true);
  const hideSublinks = () => setSublinksVisible(false);
  const invertSublinkVisibility = () => setSublinksVisible(previousState => !previousState);

  return (
    <li className={styles.NavListItem}>
      <Link href={href}>
        <a
          className={classNames(styles.link, styles.navItemLink)}
          onMouseEnter={exposeSublinks}
          onMouseLeave={hideSublinks}
          role="link"
          tabIndex={0}
          data-testid={`Nav Item ${name}`}
        >
          <span className={styles.linkContent}>{name}</span>
          {icon && icon}
        </a>
      </Link>

      {hasSublinks && (
        <>
          <button
            aria-expanded={areSublinksVisible}
            aria-haspopup={hasSublinks}
            aria-label="submenu"
            className={styles.sublinkToggleButton}
            onClick={invertSublinkVisibility}
            onMouseEnter={exposeSublinks}
            onMouseLeave={hideSublinks}
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
            onMouseEnter={exposeSublinks}
            onMouseLeave={hideSublinks}
          >
            {sublinks.map((sublink, index) => (
              <li className={styles.sublinkListItem} key={sublink.name}>
                {/* 😞 next/link fought being mocked, so `prefetch` has test-specific code */}
                <Link href={sublink.href} prefetch={process.env.NODE_ENV === 'production'}>
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
}

export default NavListItem;
