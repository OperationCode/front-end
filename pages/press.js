import Link from 'next/link';
import Head from 'components/head';
import Section from 'components/_common_/Section/Section';
import {
 Videos, Photos, CivicXBadge, Links 
} from 'components/Press';
import styles from './styles/press.css';

export default () => (
  <>
    <Head title="Press" />

    <Section className={styles.pressContainer} hasHeadingLines={false} theme="white">
      <h1>Press</h1>
      <p>
        This page is designed to make a journalist&apos;s job easy in writing, blogging, or
        documenting Operation Code. Below you will find targeted information corresponding to common
        representative visitors, videos, photos, and our branding guidelines. Eventually this page
        will also contain a list of press releases. If you are looking for our mission statement or
        our values, please{' '}
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
        . Lastly, if you are seeking information not located on our website, please do not hesitate
        to email us at <a href="mailto:staff@operationcode.org">staff@operationcode.org</a>.
      </p>

      <br />

      <div className={styles.flexContainer}>
        <div className={styles.column}>
          <h4>Code Schools</h4>
          <p>
            Firstly, if your code school&apos;s information is not listed on our directory, please
            contact us at <a href="mailto:staff@operationcode.org">staff@operationcode.org</a>. If
            your school has recently partnered with our organization and is seeking information to
            write about it a blog post, we recommend joining our Slack team to receive personal
            recommendations from our members, many of whom have attended various coding schools -
            perhaps yours!
          </p>
        </div>

        <div className={styles.column}>
          <h4>Partnered Organizations</h4>
          <p>
            We have long-standing, productive partnerships with some amazing companies, and yours
            could be one of them! Organizations the put our members and our open source work on a
            pedastal, can look forward to receive social media blasts and the appreciate of
            America&apos;s military veterans. If you are thinking about a partnership with Operation
            Code, but are unsure of what to offer our members,{' '}
            <a href="mailto:staff@operationcode.org">let&apos;s talk</a>. If you&apos;re seeking
            information to display in announcing the partnership, please see below!
          </p>
        </div>

        <div className={styles.column}>
          <h4>Media Outlets</h4>
          <p>
            The staff at Operation Code thank you for taking your time to represent us in your work.
            If your piece has a specific theme or target, and you&apos;d like some custom
            contributions, please join our organization to receive a Slack team invite. There
            you&apos;ll likely find many Operation Code members willing and able to offer personal
            anecdotes and first-hand interviews!
          </p>
        </div>
      </div>
    </Section>

    <Section contentClassName={styles.customContent} title="Videos" theme="grayLight">
      <Videos />
    </Section>

    <Section contentClassName={styles.customContent} title="Photos" theme="white">
      <Photos />
    </Section>

    <Section contentClassName={styles.customContent} title="In The News" theme="grayLight">
      <Links />
    </Section>

    <Section contentClassName={styles.customContent} title="Branding" theme="white">
      <div className={styles.logos}>
        <Link href="/branding">View Our Branding</Link>
      </div>
    </Section>

    <Section contentClassName={styles.customContent} headingLines={false} theme="grayLight">
      <h6 className={styles.header}>
        Operation Code is a graduate of the following startup accelerators:
      </h6>
      <CivicXBadge />
    </Section>
  </>
);
