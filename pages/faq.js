import React from 'react';
import Section from 'common/components/Section/Section';
import Question from 'components/FAQ/FAQItem/FAQItem';
import QuestionAnswerData from 'components/FAQ/questions';
import styles from './styles/faq.css';

const FAQ = () => (
  <Section title="General Questions" theme="white">
    <Section theme="white" headingLines={false}>
      <div className={styles.container}>
        {QuestionAnswerData.general.map(faq => (
          <Question question={faq.question} answer={faq.answer} key={faq.question} />
        ))}
      </div>
    </Section>
    <Section title="Donation Questions" theme="white">
      <br />
      <div className={styles.container}>
        {QuestionAnswerData.donation.map(faq => (
          <Question question={faq.question} answer={faq.answer} key={faq.question} />
        ))}
      </div>
    </Section>
    <Section title="Volunteer Questions" theme="white">
      <br />
      <div className={styles.container}>
        {QuestionAnswerData.volunteer.map(faq => (
          <Question question={faq.question} answer={faq.answer} key={faq.question} />
        ))}
      </div>
    </Section>
  </Section>
);

export default FAQ;
