import type { ReactElement } from 'react';
import type { Metadata } from 'next';
import Section from '@/components/Section/Section';
import { termsContent } from './_content';

export const metadata: Metadata = { title: 'Terms of Service' };

interface TermsSection {
  id: string;
  title?: string;
  content: ReactElement;
}

function Terms(): ReactElement {
  return (
    <Section>
      <div>
        <p>
          <i>Last updated: {termsContent.lastUpdated}.</i>
        </p>
        {termsContent.sections.map((section: TermsSection) => (
          <div key={section.id}>
            {section.title ? <h3>{section.title}</h3> : null}
            {section.content}
            <br />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Terms;
