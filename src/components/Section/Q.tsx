'use client';

import { useId } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import Card from '@/components/Cards/Card/Card';
import { cn } from '@/lib/utils';

interface QProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function Q({ title, children, className }: QProps) {
  const id = useId();

  return (
    <Card className={cn('min-h-full w-full flex-nowrap justify-normal py-0', className)}>
      <Accordion>
        <AccordionItem value={id} className="border-none">
          <div className="flex w-full items-center justify-between">
            <div className="flex-1 text-xl font-bold uppercase">{title}</div>
            <AccordionTrigger className="-mr-6 grid size-20 place-items-center border-none hover:no-underline" />
          </div>
          <AccordionContent className="w-full pb-4">{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
