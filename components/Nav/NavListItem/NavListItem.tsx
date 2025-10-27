import { useState } from 'react';
import Link from 'next/link';
import PlusIcon from 'static/images/icons/plus.svg';
import MinusIcon from 'static/images/icons/minus.svg';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { cx } from 'common/utils/cva';

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
}

function NavListItem({ sublinks, href, name }: NavListItemPropsType) {
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
    <li className="relative">
      <div className="h-full flex items-center justify-center">
        <Link href={href}>
          <a
            className={cx(
              'pt-1.5 h-full text-center text-secondary fill-current min-w-24 cursor-pointer',
              'flex items-center justify-center leading-none transition-all duration-200 ease-linear',
              'no-underline hover:text-primary focus-visible:text-primary',
            )}
            onMouseEnter={exposeSublinks}
            onMouseLeave={hideSublinks}
            role="link"
            tabIndex={0}
            data-testid={`Nav Item ${name}`}
          >
            {name}
          </a>
        </Link>
        {hasSublinks && (
          <button
            aria-expanded={areSublinksVisible}
            aria-haspopup={hasSublinks}
            aria-label="submenu"
            className="w-6 px-1.5 mr-1 h-full"
            onClick={invertSublinkVisibility}
            onMouseEnter={exposeSublinks}
            onMouseLeave={hideSublinks}
            type="button"
          >
            {areSublinksVisible ? (
              <MinusIcon data-testid="minus-icon" />
            ) : (
              <PlusIcon data-testid="plus-icon" />
            )}
          </button>
        )}
      </div>
      {hasSublinks && (
        <ul
          className={cx(
            'whitespace-nowrap bg-white',
            'absolute right-0 py-2 w-36 rounded-b-sm',
            'transition-colors duration-200 ease-linear',
            {
              hidden: !areSublinksVisible,
            },
          )}
          onMouseEnter={exposeSublinks}
          onMouseLeave={hideSublinks}
        >
          {sublinks.map((sublink, index) => (
            <li key={sublink.name}>
              {/* 😞 next/link fought being mocked, so `prefetch` has test-specific code */}
              {!sublink.isExternal ? (
                <Link href={sublink.href} prefetch={process.env.NODE_ENV === 'production'}>
                  <a
                    className={cx(
                      'p-4 text-secondary flex items-center justify-center fill-current no-underline',
                      'transition-colors duration-200 ease-linear hover:text-primary focus-visible:text-primary',
                    )}
                    role="link"
                    tabIndex={0}
                    data-testid={`Nav Item ${sublink.name}`}
                    onKeyDown={event => handleKeyDown(event, index)}
                  >
                    <span>{sublink.name}</span>
                  </a>
                </Link>
              ) : (
                <OutboundLink
                  analyticsEventLabel={`Clicked on ${sublink.name} -> ${sublink.href}`}
                  className="p-4 text-secondary flex justify-center transition-colors duration-200 ease-linear hover:text-primary focus-visible:text-primary no-underline"
                  data-testid={`Nav Item ${sublink.name}`}
                  href={sublink.href}
                  hasIcon
                >
                  <span>{sublink.name}</span>
                </OutboundLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavListItem;
