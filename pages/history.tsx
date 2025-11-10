import { s3 } from 'common/constants/urls';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Timeline from 'components/Timeline/Timeline';
import TimelineNav from 'components/Timeline/TimelineNav/TimelineNav';

const pageTitle = 'History';

function History() {
  return (
    <div>
      <Head title={pageTitle} />
      <HeroBanner
        backgroundImageSource={`${s3}heroBanners/colin-powell.jpg`}
        className="bg-[right_center] min-h-[60dvh]"
        title={pageTitle}
      >
        <div key="quote">
          <blockquote className="text-2xl">
            &ldquo;There are no secrets to success. It is the result of preparation, hard work,
            learning from failure.&rdquo;
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
