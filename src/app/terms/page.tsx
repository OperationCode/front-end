import type { ReactElement } from 'react';
import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Content from '@/components/Content/Content';
import { termsContent } from './_content';

export const metadata: Metadata = { title: 'Terms of Service' };

interface TermsSection {
  id: string;
  title?: string;
  content: ReactElement;
}

function Terms(): ReactElement {
  return (
    <>
      <HeroBanner title="Terms of Service" className="min-h-[35dvh]" />

      <Content
        columns={[
          <div key="terms">
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
          </div>,
        ]}
      />
    </>
  );
}

export default Terms;
