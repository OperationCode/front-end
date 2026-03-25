import { useState } from 'react';
import Link from 'next/link';
import PlusIcon from '@/static/images/icons/plus.svg';
import MinusIcon from '@/static/images/icons/minus.svg';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import { cn } from '@/common/utils/cva';

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
  const invertSublinkVisibility = () => setSublinksVisible((previousState) => !previousState);

  return (
    <li className="relative">
      <div className="flex h-full items-center">
        <Link
          href={href}
          className={cn(
            'h-full w-30 cursor-pointer fill-current pr-2 pl-8 text-secondary',
            `inline-flex items-center justify-end leading-none transition-all duration-200 ease-linear`,
            `no-underline hover:text-primary focus-visible:text-primary`,
          )}
          onMouseEnter={exposeSublinks}
          onMouseLeave={hideSublinks}
          role="link"
          tabIndex={0}
          data-testid={`Nav Item ${name}`}
        >
          {name}
        </Link>
        {hasSublinks && (
          <button
            aria-expanded={areSublinksVisible}
            aria-haspopup={hasSublinks}
            aria-label="submenu"
            className="-mt-0.5 h-full w-6 *:w-3"
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
          className={cn(
            'bg-white whitespace-nowrap',
            'absolute right-0 w-36 rounded-b-sm py-2',
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
                <Link
                  href={sublink.href}
                  prefetch={process.env.NODE_ENV === 'production'}
                  className={cn(
                    `flex items-center justify-center fill-current p-4 text-secondary no-underline`,
                    `transition-colors duration-200 ease-linear hover:text-primary focus-visible:text-primary`,
                  )}
                  role="link"
                  tabIndex={0}
                  data-testid={`Nav Item ${sublink.name}`}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span>{sublink.name}</span>
                </Link>
              ) : (
                <OutboundLink
                  analyticsEventLabel={`Clicked on ${sublink.name} -> ${sublink.href}`}
                  className="flex justify-center p-4 text-secondary no-underline transition-colors duration-200 ease-linear hover:text-primary focus-visible:text-primary"
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
