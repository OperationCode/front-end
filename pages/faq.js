import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import AccordionItem from 'components/Accordion/AccordionItem/AccordionItem';
import QuestionAnswerData from 'components/Accordion/questions';

export default () => (
  <>
    <Head title="FAQ" />

    <HeroBanner title="Frequently Asked Questions" />

    <Content
      title="General Questions"
      hasTitleUnderline
      columns={QuestionAnswerData.general.map(faq => (
        <AccordionItem title={faq.title} content={faq.content} key={faq.title} />
      ))}
    />

    <Content
      title="Donation Questions"
      hasTitleUnderline
      columns={QuestionAnswerData.donation.map(faq => (
        <AccordionItem title={faq.title} content={faq.content} key={faq.content} />
      ))}
    />

    <Content
      title="Volunteer Questions"
      hasTitleUnderline
      columns={QuestionAnswerData.volunteer.map(faq => (
        <AccordionItem title={faq.title} content={faq.content} key={faq.title} />
      ))}
    />
  </>
);
