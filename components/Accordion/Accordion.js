import { styled, keyframes } from '@stitches/react';
import { arrayOf, bool, node, number, shape, string, oneOfType } from 'prop-types';
import classNames from 'classnames';
import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from 'common/constants/testIDs';
import { ChevronDownIcon } from '@radix-ui/react-icons';
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
  /** Should Accordion have animation on hover */
  hasAnimationOnHover: bool,
};

Accordion.defaultProps = {
  className: undefined,
  hasAnimationOnHover: false,
};

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 50 },
});

const slideUp = keyframes({
  from: { height: 50 },
  to: { height: 0 },
});

const StyledContent = styled(RadixAccordion.Content, {
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  color: 'white',
  width: 25,
  height: 25,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

/**
 * @description A component whose main content is invisible until revealed by the user
 * @see http://web-accessibility.carnegiemuseums.org/code/accordions/
 */
function Accordion({ accessibilityId, className, content, hasAnimationOnHover }) {
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
            className={classNames(styles.headingContainer, {
              [styles.hover]: hasAnimationOnHover,
            })}
            data-testid={ACCORDION_TOGGLE_BUTTON}
          >
            <div className={styles.headingContainer}>{content.headingChildren}</div>
            <StyledChevron aria-hidden />
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <StyledContent>
          <section
            className={styles.accordionContent}
            data-testid={ACCORDION_CONTENT}
            id={contentId}
          >
            {content.bodyChildren}
          </section>
        </StyledContent>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
}

export default Accordion;
