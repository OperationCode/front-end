'use client';

import Section from './Section';

interface FAQProps {
  children: React.ReactNode;
  title: string;
}

export default function FAQ({ title, children }: FAQProps) {
  return (
    <Section title={title} underline>
      <div className="flex w-full flex-col gap-3">{children}</div>
    </Section>
  );
}
