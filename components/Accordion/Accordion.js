import React, { useState } from 'react';
import { node, number, string, oneOfType } from 'prop-types';
import classNames from 'classnames';
import styles from './Accordion.module.css';

Accordion.propTypes = {
  // required for joining elements together with aria attributes
  accessibilityId: oneOfType([number, string]).isRequired,

  content: node.isRequired,
  title: string.isRequired,
};

/**
 * @description A component whose main content is invisible until revealed by the user
 * @see http://web-accessibility.carnegiemuseums.org/code/accordions/
 * @param {{ content: Element | string, accessibilityId: number | string, title: Element | string }}
 * @returns {Element}
 */
function Accordion({ content, accessibilityId, title }) {
  const [isContentVisible, setContentVisibility] = useState(false);

  const toggleAccordionContent = () => setContentVisibility(previousState => !previousState);

  const contentId = `content-${accessibilityId}`;
  const accordionId = `accordion-control-${accessibilityId}`;

  return (
    <article className={styles.accordion}>
      <div className={styles.accordionHeaderGrouping}>
        <h6>{title}</h6>

        <button
          aria-controls={contentId}
          aria-expanded={isContentVisible}
          className={styles.accordionToggleButton}
          data-testid="Accordion Toggle Button"
          id={accordionId}
          onClick={toggleAccordionContent}
          type="button"
        >
          {isContentVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      <div
        aria-hidden={!isContentVisible}
        className={classNames(styles.accordionContent, {
          [styles.visible]: isContentVisible,
          [styles.invisible]: !isContentVisible,
        })}
        data-testid="Accordion Content"
        id={contentId}
        style={{ display: isContentVisible ? 'block' : 'none' }}
      >
        {content}
      </div>
    </article>
  );
}

export default Accordion;
