'use client';

import {
  Accordion as UIAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/common/utils/cva';
import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from '@/common/constants/testIDs';
import Card from '../Cards/Card/Card';

interface ContentPropType {
  headingChildren: React.ReactNode | React.ReactNode[];
  bodyChildren: React.ReactNode | React.ReactNode[];
}

export interface AccordionPropsType {
  accessibilityId: number | string;
  content: ContentPropType;
  className?: string;
  hasAnimationOnHover?: boolean;
}

function Accordion({
  accessibilityId,
  className,
  content,
  hasAnimationOnHover = false,
}: AccordionPropsType) {
  return (
    <Card
      className={cn('min-h-full w-full flex-nowrap justify-normal py-0', className)}
      hasAnimationOnHover={hasAnimationOnHover}
    >
      <UIAccordion>
        <AccordionItem value={String(accessibilityId)} className="border-none">
          <div className="flex w-full items-center justify-between">
            <div className="flex-1 text-xl font-bold uppercase">{content.headingChildren}</div>
            <AccordionTrigger
              data-testid={ACCORDION_TOGGLE_BUTTON}
              className="-mr-6 grid size-20 place-items-center border-none hover:no-underline"
            />
          </div>

          <AccordionContent data-testid={ACCORDION_CONTENT} className="w-full pb-4">
            {content.bodyChildren}
          </AccordionContent>
        </AccordionItem>
      </UIAccordion>
    </Card>
  );
}

export default Accordion;
