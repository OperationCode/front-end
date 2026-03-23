import Link from 'next/link';
import type { Metadata } from 'next';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Photos from 'components/Press/PressPhotos/PressPhotos';
import Videos from 'components/Press/PressVideos/PressVideos';
import Links from 'components/Press/PressLinks/PressLinks';

const pageTitle = 'Press';

export const metadata: Metadata = { title: pageTitle };

function Press() {
  return (
    <div>
      <HeroBanner title={pageTitle} className="min-h-[60dvh]">
        <p>
          This page is designed to make a journalist's job easy in writing, blogging, or documenting
          Operation Code. Below you will find targeted information corresponding to common
          representative visitors, videos, photos, press releases, and branding details.
        </p>
      </HeroBanner>

      <Content
        theme="white"
        columns={[
          <aside key="info">
            <p>
              If you are looking for our mission statement or our values, please{' '}
              <Link href="/about">go to the About page</Link>. On other pages of our website you can{' '}
              <Link href="/faq">see answers to frequently asked questions</Link>,{' '}
              <Link href="/history">view our history</Link>, and{' '}
              <Link href="/team">learn more about our staff</Link>. Lastly, if you are seeking
              information not located on our website, please do not hesitate to email us at{' '}
              <a href="mailto:staff@operationcode.org?subject=Press Inquiry">
                staff@operationcode.org
              </a>
              .
            </p>
          </aside>,
          <div key="visitor-info" className="flex flex-wrap justify-center">
            <div className="flex-[100%] md:flex-[100%] lg:flex-[50%]">
              <div className="m-4">
                <h4>Code Schools</h4>
                <p>
                  If your school has recently partnered with our organization and is seeking
                  information to write about it in a blog post, we recommend joining our Slack team
                  to receive personal recommendations from our members, many of whom have attended
                  various coding schools - perhaps yours!
                </p>
              </div>
            </div>

            <div className="flex-[100%] md:flex-[100%] lg:flex-[50%]">
              <div className="m-4">
                <h4>Partnered Organizations</h4>
                <p>
                  We have long-standing, productive partnerships with some amazing companies, and
                  yours could be one of them! Organizations that put our members and our open source
                  work on a pedastal, can look forward to receive social media blasts and the
                  appreciation of America's military veterans. If you are thinking about a
                  partnership with Operation Code, but are unsure of what to offer our members,{' '}
                  <a href="mailto:staff@operationcode.org?subject=Partnership">let's talk</a>. If
                  you're seeking information to display in announcing the partnership, please see
                  below!
                </p>
              </div>
            </div>

            <div className="flex-[100%] md:flex-[100%] lg:flex-[50%]">
              <div className="m-4">
                <h4>Media Outlets</h4>
                <p>
                  The staff at Operation Code thank you for taking your time to represent us in your
                  work. If your piece has a specific theme or target, and you'd like some custom
                  contributions, please join our organization to receive a Slack team invite. There
                  you'll likely find many Operation Code members willing and able to offer personal
                  anecdotes and first-hand interviews!
                </p>
              </div>
            </div>
          </div>,
        ]}
      />

      <Content title="Videos" hasTitleUnderline columns={[<Videos key="videos" />]} />

      <Content title="Photos" hasTitleUnderline theme="white" columns={[<Photos key="photos" />]} />

      <Content title="In The News" hasTitleUnderline columns={[<Links key="links" />]} />

      <Content
        title="Branding"
        hasTitleUnderline
        theme="white"
        columns={[
          <div
            key="branding"
            className="flex flex-row flex-wrap items-center justify-around pt-[15px] [&>a]:text-primary [&>a]:no-underline"
          >
            <Link href="/branding">View Our Branding</Link>
          </div>,
        ]}
      />
    </div>
  );
}

export default Press;
