// import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
// import Content from 'components/Content/Content';
// import ImageCard from 'components/Cards/ImageCard/ImageCard';
// import ValueCard from 'components/Cards/ValueCard/ValueCard';
// import OutboundLink from 'components/OutboundLink/OutboundLink';
// import { s3 } from 'common/constants/urls';
// import styles from 'styles/about.module.css';
// import styles from '../../styles/get_involved.module.css';

const pageTitle = 'Corporate Training: Breaking Biases';

const CorporateTraining = () => {
  return (
    <div className="relative">
      <Head title={pageTitle} />
      <HeroBanner
        backgroundImageSource="/static/images/heroImage.jpg"
        // className={styles.hero}
        title={pageTitle}
      />
      <div className="absolute top-1/2 inset-0 flex items-center justify-center mt-10 text-center">
        <p className="text-lg text-white max-w-[75%]">
          Operation Code has provided corporate training for tech employers since 2019. In order to
          break barriers and blockers for our military community, we must address the implicit and
          overt biases. Reach out to us if you would like more information on how our military
          cultural competency training works, if you$aposd like us to help create a military
          Diversity, Equity, Inclusion and Belonging strategy, provide ongoing professional
          development or set up a military Employee Resource Group with you: Contact the
          Partnerships Team. We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default CorporateTraining;
