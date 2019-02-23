import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import QuestionAnswerData from 'components/FAQ/questions';

export default () => (
  <>
    <Head title="FAQ" />

    <HeroBanner title="Frequently Asked Questions" />

    <Content
      title="General Questions"
      hasTitleUnderline
      columns={QuestionAnswerData.general.map(faq => (
        <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
      ))}
    />

    <Content
      title="Donation Questions"
      hasTitleUnderline
      columns={QuestionAnswerData.donation.map(faq => (
        <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
      ))}
    />

    <Content
      title="Volunteer Questions"
      hasTitleUnderline
      columns={QuestionAnswerData.volunteer.map(faq => (
        <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
      ))}
    />
  </>
);
