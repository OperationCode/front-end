import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Section from 'components/_common_/Section/Section';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import QuestionAnswerData from 'components/FAQ/questions';
import styles from './styles/faq.css';

export default () => (
  <>
    <Head title="FAQ" />

    <HeroBanner title="Frequently Asked Questions" />

    <Section hasHeadingLines={false} theme="secondary">
      <Section title="General Questions" theme="secondary">
        <div className={styles.container}>
          {QuestionAnswerData.general.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>

      <Section title="Donation Questions" theme="secondary">
        <br />
        <div className={styles.container}>
          {QuestionAnswerData.donation.map(faq => (
            <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
          ))}
        </div>
      </Section>

      <Section title="Volunteer Questions" theme="secondary">
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
