import type { Metadata } from 'next';
import { s3 } from 'common/constants/urls';
import Content from 'components/Content/Content';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Timeline from 'components/Timeline/Timeline';
import TimelineNav from 'components/Timeline/TimelineNav/TimelineNav';

const pageTitle = 'History';

export const metadata: Metadata = { title: pageTitle };

function History() {
  return (
    <div>
      <HeroBanner
        backgroundImageSource={`${s3}heroBanners/colin-powell.jpg`}
        className="bg-[right_center] min-h-[60dvh]"
        title={pageTitle}
      >
        <div key="quote">
          <blockquote className="text-2xl">
            “There are no secrets to success. It is the result of preparation, hard work, learning
            from failure.”
          </blockquote>
          <span className="text-[1.75rem] float-right">- Colin Powell</span>
        </div>
      </HeroBanner>

      <Content
        theme="white"
        columns={[
          <section key="timeline">
            <TimelineNav />
            <Timeline />
          </section>,
        ]}
      />
    </div>
  );
}

export default History;
