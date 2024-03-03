import { useState } from 'react';
import classNames from 'classnames';
import Chevron from 'public/static/images/icons/FontAwesome/angle-right-solid.svg';
import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly, { toggleMessages } from '../ScreenReaderOnly/ScreenReaderOnly';
import Card from '../Cards/Card/Card';
import styles from './Accordion.module.css';

const ChevronRight = () => <Chevron className={styles.icon} />;
const ChevronDown = () => <Chevron className={classNames(styles.icon, styles.rotate90)} />;

type ContentPropType = {
  /**
   * Labels or thumbnails representing sections of content.
   */
  headingChildren: React.ReactNode | React.ReactNode[];
  /**
   * Section of content associated with header.
   */
  bodyChildren: React.ReactNode | React.ReactNode[];
};

export type AccordionPropsType = {
  /**
   * Accessibility ID to use for joining elements together with ARIA attributes
   */
  accessibilityId: number | string;
  /**
   * Composition of the Accordion.
   */
  content: ContentPropType;
  /**
   * Name of style class to use.
   */
  className?: string;
  /**
   * Should Accordion have animation on hover.
   * @default - false  
   */
  hasAnimationOnHover?: boolean;
};

/**
 * @description A component whose main content is invisible until revealed by the user
 * @see http://web-accessibility.carnegiemuseums.org/code/accordions/
 */
function Accordion({
  accessibilityId,
  className,
  content,
  hasAnimationOnHover = false,
}: AccordionPropsType) {
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
        data-testid={ACCORDION_TOGGLE_BUTTON}
        id={accordionId}
        onClick={toggleAccordionContent}
        type="button"
      >
        {isContentVisible ? (
          <>
            <ScreenReaderOnly>{toggleMessages.close}</ScreenReaderOnly>
            <ChevronDown />
          </>
        ) : (
          <>
            <ScreenReaderOnly>{toggleMessages.open}</ScreenReaderOnly>
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
        data-testid={ACCORDION_CONTENT}
        id={contentId}
        style={{ display: isContentVisible ? 'block' : 'none' }}
      >
        {content.bodyChildren}
      </section>
    </Card>
  );
}

export default Accordion;
