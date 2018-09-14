import React from 'react';
import Section from 'common/components/Section/Section';
import Question from 'components/faq/question';
import QuestionAnswerData from 'components/faq/questions';
import styles from './styles/faq.css';

const FAQ = () => {
  const generalQuestions = QuestionAnswerData().general.map(faq => (
    <Question question={faq.question} answer={faq.answer} key={faq.question} />
  ));
  const donationQuestions = QuestionAnswerData().donation.map(faq => (
    <Question question={faq.question} answer={faq.answer} key={faq.question} />
  ));
  const volunteerQuestions = QuestionAnswerData().volunteer.map(faq => (
    <Question question={faq.question} answer={faq.answer} key={faq.question} />
  ));

  return (
    <Section title="General Questions" theme="white">
      <Section theme="white" headingLines={false}>
        <div className={styles.container}>{generalQuestions}</div>
      </Section>
      <Section title="Donation Questions" theme="white">
        <br />
        <div className={styles.container}>{donationQuestions}</div>
      </Section>
      <Section title="Volunteer Questions" theme="white">
        <br />
        <div className={styles.container}>{volunteerQuestions}</div>
      </Section>
    </Section>
  );
};

export default FAQ;
