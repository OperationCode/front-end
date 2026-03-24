'use client';

import { useId } from 'react';
import Accordion from '@/components/Accordion/Accordion';

interface QuestionProps {
  title: string;
  children: React.ReactNode;
}

export default function Question({ title, children }: QuestionProps) {
  const id = useId();

  return (
    <Accordion
      content={{
        headingChildren: <h6>{title}</h6>,
        bodyChildren: <p>{children}</p>,
      }}
      accessibilityId={id}
    />
  );
}
