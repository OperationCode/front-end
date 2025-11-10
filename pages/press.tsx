import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import { Videos, Photos, Links } from 'components/Press';

const pageTitle = 'Press';

function Press() {
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="min-h-[60dvh]">
        <p>
          This page is designed to make a journalist&apos;s job easy in writing, blogging, or
          documenting Operation Code. Below you will find targeted information corresponding to
          common representative visitors, videos, photos, press releases, and branding details.
        </p>
      </HeroBanner>

      <Content
        theme="white"
        columns={[
          <aside key="info">
            <p>
              If you are looking for our mission statement or our values, please{' '}
              <Link href="/about">
                <a>go to the About page</a>
              </Link>
              . On other pages of our website you can{' '}
              <Link href="/faq">
                <a>see answers to frequently asked questions</a>
              </Link>
              ,{' '}
              <Link href="/history">
                <a>view our history</a>
              </Link>
              , and{' '}
              <Link href="/team">
                <a>learn more about our staff</a>
              </Link>
              . Lastly, if you are seeking information not located on our website, please do not
              hesitate to email us at{' '}
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
                  appreciation of America&apos;s military veterans. If you are thinking about a
                  partnership with Operation Code, but are unsure of what to offer our members,{' '}
                  <a href="mailto:staff@operationcode.org?subject=Partnership">let&apos;s talk</a>.
                  If you&apos;re seeking information to display in announcing the partnership,
                  please see below!
                </p>
              </div>
            </div>

            <div className="flex-[100%] md:flex-[100%] lg:flex-[50%]">
              <div className="m-4">
                <h4>Media Outlets</h4>
                <p>
                  The staff at Operation Code thank you for taking your time to represent us in your
                  work. If your piece has a specific theme or target, and you&apos;d like some
                  custom contributions, please join our organization to receive a Slack team invite.
                  There you&apos;ll likely find many Operation Code members willing and able to
                  offer personal anecdotes and first-hand interviews!
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
            className="pt-[15px] flex flex-row flex-wrap justify-around items-center [&>a]:text-primary [&>a]:no-underline"
          >
            <Link href="/branding">
              <a>View Our Branding</a>
            </Link>
          </div>,
        ]}
      />
    </div>
  );
}

export default Press;
