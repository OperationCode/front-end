import Link from 'next/link';
import { s3 } from 'common/constants/urls';
import successStories from 'common/constants/successStories';
import partners from 'common/constants/partners';
import Head from 'components/head';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import Section from 'components/_common_/Section/Section';
import AdBanner from 'components/AdBanner/AdBanner';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import SuccessStory from 'components/SuccessStory/SuccessStory';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import styles from './styles/index.css';

const featuredLinksArray = [
  {
    href: 'get_involved',
    name: 'Get Involved',
    imageSource: `${s3}redesign/images/smiling-group.jpg`,
    alt: 'Group of coders smiling at each other',
  },
  {
    href: 'donate',
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

export default () => (
  <div>
    <Head title="Home" />

    <HeroBanner
      imageSource={`${s3}redesign/heroBanners/homepage.jpg`}
      isFullViewHeight
      title="Deploy The Future"
    >
      <>
        <p>
          We&apos;re the largest community of military veterans, service members, and spouses
          committed to becoming software developers with the help of mentors, scholarships, and our
          tech partners.
        </p>

        <LinkButton href="/who_we_serve">Learn More</LinkButton>

        <div className={styles.featuredLinks}>
          {featuredLinksArray.map(({ href, name, imageSource, alt }) => (
            <Link href={href} key={name}>
              <a>
                <div className={styles.featuredLinkItem}>
                  <h6>{name}</h6>
                  <img src={imageSource} alt={alt} />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </>
    </HeroBanner>

    <AdBanner
      href="http://op.co.de/topcoder-veterans"
      imageSource={`${s3}partnerLogos/logo_topcoder_with_name.svg`}
    >
      Operation Code and Topcoder have teamed up to work on open source coding projects, to solve
      critical problems, and to compete for cash prizes! Sign up for Topcoder Veterans.
    </AdBanner>

    <Section contentClassName={styles.ourMission} hasHeadingLines={false} theme="mist">
      <ImageCard
        imageSource={`${s3}redesign/images/node-summit-2018.jpg`}
        alt="Operation Code members posing at Node Summit 2018"
        className={styles.missionCard}
        isImageFirst={false}
      >
        <h2>Our Mission</h2>
        <p>
          At Operation Code, we strongly believe in improving the lives of military veterans,
          service members, and their spouses. We increase their chances for success in the tech
          industry as software developers through thoughtful mentorship, code school scholarships,
          and career services.
        </p>
      </ImageCard>
    </Section>

    <Section
      title="Success Stories"
      contentClassName={styles.successStories}
      hasHeadingLines={false}
      theme="slate"
    >
      {successStories.map(story => (
        <SuccessStory {...story} key={story.title} />
      ))}
    </Section>

    <Section
      title="Partners"
      contentClassName={styles.partnerLogos}
      hasHeadingLines={false}
      theme="mist"
    >
      {partners.map(partner => (
        <PartnerLogoLink key={partner.name} {...partner} />
      ))}
    </Section>

    <JoinSection />
  </div>
);
