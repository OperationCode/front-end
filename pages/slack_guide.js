import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import styles from 'styles/slack_guide.module.css';

const pageTitle = 'Slack Guide';

function SlackGuide() {
  return (
    <div className={styles.slackGuide}>
      <Head title={pageTitle} />

      <HeroBanner className={styles.hero} title={pageTitle}>
        <iframe
          title="Slack Guide"
          src="https://youtube.com/embed/m2JuAa6-ors"
          frameBorder="0"
          allowFullScreen
          width="755"
          height="425"
        />
      </HeroBanner>
    </div>
  );
}

export default SlackGuide;
