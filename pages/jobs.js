import React from 'react';
import Head from 'components/head';
import { s3 } from 'common/constants/urls';
import HeroBanner from 'common/components/HeroBanner/HeroBanner';
import Section from 'common/components/Section/Section';
import styles from './styles/jobs.css';

export default () => (
  <>
    <Head title="Jobs" />
    <HeroBanner className={styles.hero} imageSource={`${s3}heroBanners/lincoln.jpg`} title="Jobs">
      <>
        <blockquote className={styles.quote}>
          &ldquo;I'm always for the man who is willing to work.&rdquo;
        </blockquote>
        <span className={styles.author}>Abraham Lincoln</span>
      </>
    </HeroBanner>
    <Section theme="mist">
      <p>Job Content will go here.</p>
    </Section>
  </>
);
