import React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { BUTTON } from 'common/constants/testIDs';
import { gtag } from 'common/utils/thirdParty/gtag';
import { getDataAttributes, getAriaAttributes } from 'common/utils/prop-utils';
import styles from './Button.module.css';

type GoogleAnalyticsEventPropType = {
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
};

type ButtonProps = {
  /**
   * Helps track in-page `event` interactions.
   */
  analyticsObject?: GoogleAnalyticsEventPropType;
  /**
   * Forces the component's width as wide as its parent container's width.
   */
  fullWidth?: boolean;
  /**
   * Sets the button color theme.
   */
  theme?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  analyticsObject = {
    action: 'Button Selected',
    category: 'Interactions',
  },
  children,
  className = undefined,
  disabled = false,
  fullWidth = false,
  onClick = noop,
  tabIndex = 0,
  theme = 'primary',
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
      className={classNames(styles.Button, className, styles[theme], {
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
      })}
      data-testid={BUTTON}
      disabled={disabled}
      onClick={e => {
        gtag.event(eventConfig);
        onClick(e);
      }}
      tabIndex={tabIndex}
      type={type}
      {...customDataAttributes}
      {...ariaAttributes}
    >
      {children}
    </button>
  );
}
