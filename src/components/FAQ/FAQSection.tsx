'use client';

import Content from '@/components/Content/Content';

interface FAQSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FAQSection({ title, children }: FAQSectionProps) {
  return (
    <Content
      title={title}
      hasTitleUnderline
      columns={[
        <div key="faq-content" className="w-full">
          {children}
        </div>,
      ]}
    />
  );
}
