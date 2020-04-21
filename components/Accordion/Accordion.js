import React, { useState } from 'react';
import { arrayOf, bool, node, number, shape, string, oneOfType } from 'prop-types';
import classNames from 'classnames';
import Chevron from 'public/static/images/icons/FontAwesome/angle-right-solid.svg';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import Card from 'components/Cards/Card/Card';
import styles from './Accordion.module.css';

const ChevronRight = () => <Chevron className={styles.icon} />;
const ChevronDown = () => <Chevron className={classNames(styles.icon, styles.rotate90)} />;

export const screenReaderToggleMessages = {
  open: 'Show more',
  close: 'Hide expanded',
};

Accordion.propTypes = {
  // required for joining elements together with aria attributes
  accessibilityId: oneOfType([number, string]).isRequired,
  className: string,
  content: shape({
    headingChildren: oneOfType([node, arrayOf(node)]).isRequired,
    bodyChildren: oneOfType([node, arrayOf(node)]).isRequired,
  }).isRequired,
  hasAnimationOnHover: bool,
};

Accordion.defaultProps = {
  className: undefined,
  hasAnimationOnHover: false,
};

/**
 * @description A component whose main content is invisible until revealed by the user
 * @see http://web-accessibility.carnegiemuseums.org/code/accordions/
 */
function Accordion({ accessibilityId, className, content, hasAnimationOnHover }) {
  const [isContentVisible, setContentVisibility] = useState(false);

  const toggleAccordionContent = () => setContentVisibility(previousState => !previousState);

  const contentId = `content-${accessibilityId}`;
  const accordionId = `accordion-control-${accessibilityId}`;

  return (
    <Card
      className={classNames(styles.Accordion, className)}
      hasAnimationOnHover={hasAnimationOnHover}
    >
      <div className={styles.headingContainer}>{content.headingChildren}</div>

      <button
        aria-controls={contentId}
        aria-expanded={isContentVisible}
        className={styles.accordionToggleButton}
        data-testid="Accordion Toggle Button"
        id={accordionId}
        onClick={toggleAccordionContent}
        type="button"
      >
        {isContentVisible ? (
          <>
            <ScreenReaderOnly>{screenReaderToggleMessages.close}</ScreenReaderOnly>
            <ChevronDown />
          </>
        ) : (
          <>
            <ScreenReaderOnly>{screenReaderToggleMessages.open}</ScreenReaderOnly>
            <ChevronRight />
          </>
        )}
      </button>

      <section
        aria-hidden={!isContentVisible}
        className={classNames(styles.accordionContent, {
          [styles.visible]: isContentVisible,
          [styles.invisible]: !isContentVisible,
        })}
        data-testid="Accordion Content"
        id={contentId}
        style={{ display: isContentVisible ? 'block' : 'none' }}
      >
        {content.bodyChildren}
      </section>
    </Card>
  );
}

export default Accordion;
