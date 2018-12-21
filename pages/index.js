import Link from 'next/link';
import { s3 } from 'common/constants/urls';
import successStories from 'common/constants/successStories';
import partners from 'common/constants/partners';
import Head from 'components/head';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
import Section from 'components/_common_/Section/Section';
import SuccessStory from 'components/SuccessStory/SuccessStory';
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
  <>
    <Head title="Home" />

    <HeroBanner
      title="Deploy The Future"
      imageSource={`${s3}redesign/heroBanners/homepage.jpg`}
      isFullViewHeight
      className={styles.hero}
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
            <div className={styles.featuredLinkItem} key={name}>
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
            </div>
          ))}
        </div>
      </>
    </HeroBanner>

    <Section contentClassName={styles.ourMission} hasHeadingLines={false} theme="gray">
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
      theme="secondary"
    >
      {successStories.map(story => (
        <SuccessStory {...story} key={story.title} />
      ))}
    </Section>

    <Section
      title="Sponsors"
      contentClassName={styles.partnerLogos}
      hasHeadingLines={false}
      theme="gray"
    >
      {partners.map(partner => (
        <PartnerLogoLink key={partner.name} {...partner} />
      ))}
    </Section>

    <JoinSection />
  </>
);
