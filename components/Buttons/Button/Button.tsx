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
   * More precise labelling of the related action. E.g. alongside the 'Added a component' action,
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
   * Element used as the button label.
   */
  children: React.ReactNode | string;
  /**
   * Applies classnames to the base element.
   */
  className?: string;
  /**
   * Disables user interaction with the component.
   */
  disabled?: boolean;
  /**
   * Forces the component's width as wide as its parent container's width.
   */
  fullWidth?: boolean;
  /**
   * Function to be called when button is clicked.
   */
  onClick?: () => void | undefined;
  /**
   * Sets the tab index order of the base element.
   */
  tabIndex?: string | number;
  /**
   * Sets the button color theme.
   */
  theme?: 'primary' | 'secondary';
  /**
   * Applies a button type to the base element.
   */
  type?: 'button' | 'reset' | 'submit';
  datum?: any;
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
  datum = '',
  ...rest
}: ButtonProps) {
  const customDataAttributes = getDataAttributes(rest);
  const ariaAttributes = getAriaAttributes(rest);

  const eventConfig = {
    ...analyticsObject,
    label: typeof children === 'string' ? children : undefined,
  };

  const clickHandler = () => {
    gtag.event(eventConfig);
    onClick();
  };

  return (
    <button
      className={classNames(styles.Button, className, styles[theme], {
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
      })}
      data-testid={BUTTON}
      disabled={disabled}
      onClick={clickHandler}
      tabIndex={tabIndex}
      type={type}
      {...customDataAttributes}
      {...ariaAttributes}
    >
      {children}
    </button>
  );
}
