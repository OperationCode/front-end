import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function SlackGuideLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeroBanner title="Slack Guide" className="min-h-[60dvh]">
        <iframe
          title="Slack Guide"
          src="https://youtube.com/embed/6wjmH5qL3Ms"
          allowFullScreen
          width="755"
          height="425"
          className="size-full sm:h-[425px] sm:w-[755px]"
        />
      </HeroBanner>

      <HeroBanner title="Slack Frequently Asked Questions" className="min-h-[35dvh]" />

      {children}
    </div>
  );
}
