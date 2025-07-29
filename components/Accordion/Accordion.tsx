import { useState } from 'react';
import Chevron from 'public/static/images/icons/FontAwesome/angle-right-solid.svg';
import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from 'common/constants/testIDs';
import { twMerge } from 'tailwind-merge';
import ScreenReaderOnly, { toggleMessages } from '../ScreenReaderOnly/ScreenReaderOnly';
import Card from '../Cards/Card/Card';

interface ContentPropType {
  /**
   * Labels or thumbnails representing sections of content.
   */
  headingChildren: React.ReactNode | React.ReactNode[];
  /**
   * Section of content associated with header.
   */
  bodyChildren: React.ReactNode | React.ReactNode[];
}

export interface AccordionPropsType {
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
}

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
      className={twMerge('w-full py-0 justify-normal flex-nowrap min-h-full', className)}
      hasAnimationOnHover={hasAnimationOnHover}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex-1 text-xl font-bold uppercase">{content.headingChildren}</div>
        <button
          aria-controls={contentId}
          aria-expanded={isContentVisible}
          className="grid place-items-center w-20 h-20 -mr-6"
          data-testid={ACCORDION_TOGGLE_BUTTON}
          id={accordionId}
          onClick={toggleAccordionContent}
          type="button"
        >
          <ScreenReaderOnly>{toggleMessages[isContentVisible ? 'close' : 'open']}</ScreenReaderOnly>
          <Chevron
            className={`w-[30px] fill-current transition-transform duration-100 ease-linear ${isContentVisible ? 'rotate-90' : ''} `}
          />
        </button>
      </div>

      <section
        aria-hidden={!isContentVisible}
        className={`w-full pb-4 ${isContentVisible ? 'block' : 'hidden'}`}
        data-testid={ACCORDION_CONTENT}
        id={contentId}
      >
        {content.bodyChildren}
      </section>
    </Card>
  );
}

export default Accordion;
