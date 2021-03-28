import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Accordion from 'components/Accordion/Accordion';
import styles from 'styles/faq.module.css';

const pageTitle = 'Slack Guide';

const questions = {
  slack: [
    {
      title: 'Question?',
      content: <>Answer</>,
    },
    {
      title: 'Question?',
      content: <>Answer</>,
    },
    {
      title: 'Question?',
      content: <>Answer</>,
    },
  ],
};

function SlackGuide() {
  return (
    <div className={styles.FAQ}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        <iframe
          title="Slack Guide"
          src="https://youtube.com/embed/m2JuAa6-ors"
          frameBorder="0"
          allowFullScreen
          width="755"
          height="425"
        />
      </HeroBanner>

      <HeroBanner title="Slack Frequently Asked Questions" />

      <Content
        columns={questions.slack.map(faq => (
          <Accordion
            className={styles.FAQAccordion}
            content={{
              headingChildren: <h6>{faq.title}</h6>,
              bodyChildren: <p>{faq.content}</p>,
            }}
          />
        ))}
      />
    </div>
  );
}

export default SlackGuide;
