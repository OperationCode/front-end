import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import SponsorsSection from 'components/ReusableSections/SponsorsSection/SponsorsSection';
import SuccessStory from 'components/SuccessStory/SuccessStory';
import Heading from 'components/Heading/Heading';
import LinkButton from 'components/LinkButton/LinkButton';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import successStories from 'common/constants/successStories';
import { s3 } from 'common/constants/urls';
import styles from './styles/index.module.css';

const featuredLinksArray = [
  {
    href: 'get_involved',
    name: 'Get Involved',
    imageSource: `${s3}redesign/images/smiling-group.jpg`,
    alt: 'Group of coders smiling at each other',
  },
  {
    href: '/donate',
    name: 'Donate',
    imageSource: `${s3}redesign/images/fist-bumping.jpg`,
    alt: 'A team fist-bumping eachother over a table.',
  },
  {
    href: 'events',
    name: 'Events',
    imageSource: `${s3}redesign/images/meetup-lecture.jpg`,
    alt: 'Dozens of developers look at a lecturer.',
  },
];

const Home = () => (
  <>
    <Head title="Home" />

    <HeroBanner
      backgroundImageSource={`${s3}redesign/heroBanners/homepage.jpg`}
      className={styles.hero}
      isFullViewportHeight
      title="Deploy The Future"
    >
      <>
        <p className={styles.justifyAlign}>
          We&apos;re the largest community of military veterans, service members, and spouses
          committed to becoming software developers with the help of mentors, scholarships, and our
          tech partners.
        </p>

        <LinkButton href="/who_we_serve">Learn More</LinkButton>

        <div className={styles.featuredLinks}>
          {featuredLinksArray.map(({ href, name, imageSource, alt, analyticsEventLabel }) => (
            <div className={styles.featuredLinkItem} key={name}>
              {analyticsEventLabel ? (
                <OutboundLink analyticsEventLabel={analyticsEventLabel} href={href} hasIcon={false}>
                  <h6>{name}</h6>
                  <ScreenReaderOnly>{`Image: ${alt}`}</ScreenReaderOnly>
                  <div
                    style={{ backgroundImage: `url(${imageSource})` }}
                    className={styles.featuredLinkImage}
                    aria-hidden="true"
                  />
                </OutboundLink>
              ) : (
                <Link href={href}>
                  <a>
                    <h6>{name}</h6>
                    <ScreenReaderOnly>{`Image: ${alt}`}</ScreenReaderOnly>
                    <div
                      style={{ backgroundImage: `url(${imageSource})` }}
                      className={styles.featuredLinkImage}
                      aria-hidden="true"
                    />
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
      </>
    </HeroBanner>

    <Content
      theme="gray"
      columns={[
        <div className={styles.cta}>
          <Heading text="Our Mission" hasTitleUnderline />
          <p className={styles.justifyAlign}>
            At Operation Code, we strongly believe in improving the lives of military veterans,
            service members, and their spouses. We increase their chances for success in the tech
            industry as software developers through thoughtful mentorship, code school scholarships,
            and career services.
          </p>
        </div>,
      ]}
    />

    <Content
      title="Success Stories"
      columns={successStories.map(story => (
        <SuccessStory {...story} key={story.title} />
      ))}
    />

    <SponsorsSection />

    <JoinSection />
  </>
);

export default Home;
