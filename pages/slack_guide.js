import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
// import OutboundLink from 'components/OutboundLink/OutboundLink';
import YouTubeVideo from 'components/YouTubeVideo/YouTubeVideo';
// import { s3 } from 'common/constants/urls';
import styles from 'styles/slack_guide.module.css';

const pageTitle = "Slack Guide";

function SlackGuide() {
    return (
      <div className={styles.slackGuide}>
        <Head title={pageTitle} />

        <HeroBanner
        // backgroundImageSource={`${s3}redesign/heroBanners/about.jpg`}
        className={styles.hero}
        title={pageTitle}
        />

        <Content
            theme="white"
            columns={[
                <>
                    {/* <iframe
                        title="Slack Guide"
                        src="https://youtu.be/m2JuAa6-ors"
                        frameBorder="0"
                        allowFullScreen
                        width="755"
                        height="425"
                    /> */}
                    <YouTubeVideo />
                </>,
            ]}
        />
      </div>
    );
  }
  
  export default SlackGuide;

