import { useState } from 'react';
import Link from 'next/link';
import PlusIcon from 'static/images/icons/plus.svg';
import MinusIcon from 'static/images/icons/minus.svg';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { cx } from 'common/utils/cva';
import styles from './NavListItem.module.css';

interface SublinkType {
  name: string;

  href: string;

  /** @default false */
  isExternal?: boolean;
}

export interface NavListItemPropsType {
  /**
   * Text used for the label.
   */
  name: string;
  /**
   * Url to be passed to the base anchor element.
   */
  href: string;
  /**
   * List of child links containing the `name` and `href`
   */
  sublinks?: SublinkType[];
  /**
   * Includes an optional icon.
   */
  icon?: React.ReactElement | null;
}

function NavListItem({ sublinks, href, name, icon = null }: NavListItemPropsType) {
  const [areSublinksVisible, setSublinksVisible] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent, indexKeyedOn: number) => {
    const lastSublinkIndex = sublinks && sublinks.length - 1;
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

  const hasSublinks = sublinks && sublinks.length > 0;
  const exposeSublinks = () => setSublinksVisible(true);
  const hideSublinks = () => setSublinksVisible(false);
  const invertSublinkVisibility = () => setSublinksVisible(previousState => !previousState);

  return (
    <li className={styles.NavListItem}>
      <Link href={href}>
        <a
          className={cx(styles.link, '[&>svg]:-bottom-2 [&>svg]:right-3', styles.navItemLink)}
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
            className={cx(styles.sublinksList, {
              [styles.invisible]: !areSublinksVisible,
            })}
            onMouseEnter={exposeSublinks}
            onMouseLeave={hideSublinks}
          >
            {sublinks.map((sublink, index) => (
              <li className={styles.sublinkListItem} key={sublink.name}>
                {/* 😞 next/link fought being mocked, so `prefetch` has test-specific code */}
                {!sublink.isExternal ? (
                  <Link href={sublink.href} prefetch={process.env.NODE_ENV === 'production'}>
                    <a
                      className={cx(styles.link, '[&>svg]:-bottom-2 [&>svg]:right-3')}
                      role="link"
                      tabIndex={0}
                      data-testid={`Nav Item ${sublink.name}`}
                      onKeyDown={event => handleKeyDown(event, index)}
                    >
                      <span className={styles.linkContent}>{sublink.name}</span>
                    </a>
                  </Link>
                ) : (
                  <OutboundLink
                    analyticsEventLabel={`Clicked on ${sublink.name} -> ${sublink.href}`}
                    className={cx(styles.link, '[&>svg]:-bottom-2 [&>svg]:right-3')}
                    data-testid={`Nav Item ${sublink.name}`}
                    href={sublink.href}
                    hasIcon
                  >
                    <span className={cx(styles.link, '[&>svg]:-bottom-2 [&>svg]:right-3')}>
                      {sublink.name}
                    </span>
                  </OutboundLink>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

export default NavListItem;
