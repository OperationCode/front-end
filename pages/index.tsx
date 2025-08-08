import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import SponsorsSection from 'components/ReusableSections/SponsorsSection/SponsorsSection';
import SuccessStory from 'components/SuccessStory/SuccessStory';
import Heading from 'components/Heading/Heading';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import successStories from 'common/constants/successStories';
import { s3 } from 'common/constants/urls';
import styles from 'styles/index.module.css';
import { cx } from 'common/utils/cva';

function Home() {
  return (
    <div className={styles.Home}>
      <Head title="Home" />

      <HeroBanner
        className={cx(styles.hero, 'min-h-dvh')}
        backgroundImageSource={`${s3}redesign/heroBanners/homepage.jpg`}
        title="Build The Future"
      >
        <div className={styles.heroText}>
          <p>
            We&apos;re the largest community of military veterans, service members, and spouses
            committed to becoming software developers with the help of mentors, scholarships, and
            our tech partners.
          </p>
        </div>

        <div className={styles.ctaContainer}>
          <LinkButton href="/about">Learn More</LinkButton>
          <LinkButton href="/join">Join Us</LinkButton>
        </div>
      </HeroBanner>

      <Content
        theme="gray"
        columns={[
          <div className={styles.mission}>
            <Heading text="Our Mission" hasTitleUnderline />
            <p>
              We serve our veterans, service members, and their families, work alongside their
              journey through the tech industry, and help them thrive in their careers to code a
              better future.
            </p>
          </div>,
        ]}
      />

      <Content
        title="Success Stories"
        columns={successStories.map(story => (
          <SuccessStory {...story} key={story.title} />
        ))}
        className="pb-24"
      />

      <SponsorsSection />

      <JoinSection />
    </div>
  );
}

export default Home;
