'use client';

import { useId } from 'react';
import Accordion from '@/components/Accordion/Accordion';

interface QProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function Q({ title, children, className }: QProps) {
  const id = useId();

  return (
    <Accordion
      className={className}
      content={{
        headingChildren: <h6>{title}</h6>,
        bodyChildren: children,
      }}
      accessibilityId={id}
    />
  );
}
