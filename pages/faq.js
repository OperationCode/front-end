<<<<<<< HEAD
import React from 'react';
import Head from 'components/head';
=======
import Head from 'components/head';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import Section from 'components/_common_/Section/Section';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import QuestionAnswerData from 'components/FAQ/questions';
import styles from './styles/faq.css';

export default () => (
  <>
    <Head title="FAQ" />
<<<<<<< HEAD
    <Section title="General Questions" theme="white">
      <Section theme="white" headingLines={false}>
=======

    <HeroBanner title="Frequently Asked Questions" />

    <Section hasHeadingLines={false} theme="secondary">
      <Section title="General Questions" theme="secondary">
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        <div className={styles.container}>
          {QuestionAnswerData.general.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>
<<<<<<< HEAD
      <Section title="Donation Questions" theme="white">
=======

      <Section title="Donation Questions" theme="secondary">
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        <br />
        <div className={styles.container}>
          {QuestionAnswerData.donation.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>
<<<<<<< HEAD
      <Section title="Volunteer Questions" theme="white">
=======

      <Section title="Volunteer Questions" theme="secondary">
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        <br />
        <div className={styles.container}>
          {QuestionAnswerData.volunteer.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>
    </Section>
  </>
);
