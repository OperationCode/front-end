import Head from 'components/head';
import Section from 'components/_common_/Section/Section';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import QuestionAnswerData from 'components/FAQ/questions';
import styles from './styles/faq.css';

export default () => (
  <>
    <Head title="FAQ" />
    <Section title="General Questions" theme="white">
      <Section theme="white" headingLines={false}>
        <div className={styles.container}>
          {QuestionAnswerData.general.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>
      <Section title="Donation Questions" theme="white">
        <br />
        <div className={styles.container}>
          {QuestionAnswerData.donation.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>
      <Section title="Volunteer Questions" theme="white">
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
