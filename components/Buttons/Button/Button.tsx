import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'common/utils/cva';
import noop from 'lodash/noop';
import { cva } from 'common/utils/cva';
import { BUTTON } from 'common/constants/testIDs';
import { gtag } from 'common/utils/thirdParty/gtag';
import { getDataAttributes, getAriaAttributes } from 'common/utils/prop-utils';

interface GoogleAnalyticsEventPropType {
  /**
   * A description of the behaviour. E.g. 'Clicked Delete', 'Added a component', 'Deleted account'
   */
  action: string;
  /**
   * A top level category for these events. E.g. 'User', 'Navigation', 'App Editing', etc.
   */
  category: string;
  /**
   * More precise labeling of the related action. E.g. alongside the 'Added a component' action,
   * we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc.
   */
  label?: string;
  /**
   * A means of recording a numerical value against an event. E.g. a rating, a score, etc.
   */
  value?: number;
  /**
   * If an event is not triggered by a user interaction, but instead by our code (e.g. on page
   * load), it should be flagged as a nonInteraction event to avoid skewing bounce rate data.
   */
  nonInteraction?: boolean;
  /**
   * This specifies the transport mechanism with which hits will be sent. Valid values include
   * 'beacon', 'xhr', or 'image'.
   */
  transport?: 'beacon' | 'xhr' | 'image';
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  /**
   * Helps track in-page `event` interactions.
   */
  analyticsObject?: GoogleAnalyticsEventPropType;
}

export const buttonCva = cva({
  base: [
    'font-family-bebas font-bold text-center uppercase text-shadow-[initial] tracking-wide',
    'inline-block rounded leading-none border-4 border-solid cursor-pointer py-4 px-3',
    'whitespace-nowrap transition-all duration-200 ease-linear min-w-[175px]',
    'focus-visible:bg-transparent hover:bg-transparent',
    'disabled:opacity-60 disabled:hover:cursor-not-allowed',
  ],
  variants: {
    theme: {
      primary: 'bg-primary border-primary text-secondary outline-primary text-secondary',
      secondary: 'bg-secondary border-secondary text-primary outline-secondary text-primary',
    },
  },
  compoundVariants: [
    {
      theme: 'primary',
      class: 'focus-visible:text-primary hover:text-primary',
    },
    {
      theme: 'secondary',
      class: 'focus-visible:text-secondary hover:text-secondary',
    },
  ],
  defaultVariants: {
    theme: 'primary',
  },
});

export default function Button({
  analyticsObject = {
    action: 'Button Selected',
    category: 'Interactions',
  },
  children,
  className = undefined,
  disabled = false,
  onClick = noop,
  tabIndex = 0,
  theme,
  type = 'button',
  ...rest
}: ButtonProps) {
  const customDataAttributes = getDataAttributes(rest);
  const ariaAttributes = getAriaAttributes(rest);
  const eventConfig = {
    ...analyticsObject,
    label: typeof children === 'string' ? children : undefined,
  };

  return (
    <button
      className={buttonCva({ theme, className })}
      data-testid={BUTTON}
      disabled={disabled}
      onClick={e => {
        gtag.event(eventConfig);
        onClick(e);
      }}
      tabIndex={tabIndex}
      // TODO: lint rule seems broken. check after updating lint deps?
      type={type} // eslint-disable-line react/button-has-type
      {...customDataAttributes}
      {...ariaAttributes}
    >
      {children}
    </button>
  );
}
