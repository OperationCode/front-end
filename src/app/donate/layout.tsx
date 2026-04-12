import type { PropsWithChildren } from 'react';
import Container from '@/components/Container/Container';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function DonateLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner title="Donate" className="min-h-[35dvh]" />

      <Container theme="white">
        <div className="mx-auto mb-3 flex w-full max-w-prose flex-col gap-2 border-b-3 border-secondary px-4 pb-3">
          {children}
        </div>

        <iframe
          title="Donation Form"
          src="https://secure.lglforms.com/form_engine/s/BRtP7QUKyHOyEYsZROsRew"
          className="mx-auto h-[1300px] w-full max-w-prose border-transparent px-4 outline-transparent"
        />
      </Container>
    </>
  );
}
