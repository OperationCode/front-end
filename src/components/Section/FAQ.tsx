'use client';

import Section from './Section';

interface FAQProps {
  children: React.ReactNode;
  title: string;
}

export default function FAQ({ title, children }: FAQProps) {
  return (
    <Section title={title} underline>
      <div className="w-full">{children}</div>
    </Section>
  );
}
