import { arrayOf, node, number, shape, string, oneOfType } from 'prop-types';
import classNames from 'classnames';
import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from 'common/constants/testIDs';
import Chevron from 'public/static/images/icons/FontAwesome/angle-right-solid.svg';
import * as RadixAccordion from '@radix-ui/react-accordion';
import styles from './Accordion.module.css';

Accordion.propTypes = {
  /** Accessibility ID to use for joining elements together
   * with ARIA attributes */
  accessibilityId: oneOfType([number, string]).isRequired,
  /** Name of style class to use */
  className: string,
  /** Composition of the Accordion */
  content: shape({
    /** Labels or thumbnails representing sections of content */
    headingChildren: oneOfType([node, arrayOf(node)]).isRequired,
    /** Section of content associated with header */
    bodyChildren: oneOfType([node, arrayOf(node)]).isRequired,
  }).isRequired,
};

Accordion.defaultProps = {
  className: undefined,
};

/**
 * @description A component whose main content is invisible until revealed by the user
 * @see http://web-accessibility.carnegiemuseums.org/code/accordions/
 */
function Accordion({ accessibilityId, className, content }) {
  const contentId = `content-${accessibilityId}`;
  const accordionId = `accordion-control-${accessibilityId}`;

  return (
    <RadixAccordion.Root
      type="single"
      className={classNames(styles.Accordion, className)}
      collapsible
    >
      <RadixAccordion.Item value={accordionId}>
        <RadixAccordion.Header>
          <RadixAccordion.Trigger
            className={styles.headingContainer}
            data-testid={ACCORDION_TOGGLE_BUTTON}
            id={accordionId}
          >
            <div className={styles.headingContainer}>{content.headingChildren}</div>
            <Chevron className={styles.icon} />
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content>
          <section
            className={styles.accordionContent}
            data-testid={ACCORDION_CONTENT}
            id={contentId}
          >
            {content.bodyChildren}
          </section>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
}

export default Accordion;
