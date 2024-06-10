// import Link from 'next/link';
import Image from 'next/image';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
// import Content from 'components/Content/Content';
// import ImageCard from 'components/Cards/ImageCard/ImageCard';
// import ValueCard from 'components/Cards/ValueCard/ValueCard';
// import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = 'Corporate Training: Breaking Biases';

const CorporateTraining = () => {
  return (
    <>
      <div className="relative">
        <Head title={pageTitle} />
        <HeroBanner backgroundImageSource="/static/images/heroImage.jpg" title={pageTitle} />
        <div className="absolute top-1/2 inset-0 flex items-center justify-center mt-10 text-center">
          <p className="text-lg text-white max-w-[75%]">
            Operation Code has provided corporate training for tech employers since 2019. In order
            to break barriers and blockers for our military community, we must address the implicit
            and overt biases. Reach out to us if you would like more information on how our military
            cultural competency training works, if you$aposd like us to help create a military
            Diversity, Equity, Inclusion and Belonging strategy, provide ongoing professional
            development or set up a military Employee Resource Group with you: Contact the
            Partnerships Team. We look forward to hearing from you!
          </p>
        </div>
      </div>
      <div>
        <div className="flex w-full">
          <div className="w-3/6 bg-white">
            <h6>Bias #1</h6>
            <p>All Veterans have PTSD or some form of mental illness</p>
            <p>
              The truth is that 28% of OIF/OEF/OND Vets self-reported one mental health diagnosis
              (NIH), and more than 1 in 5 adult civilians in the general population live with a
              mental illness (CDC).
            </p>
          </div>
          <div className="relative w-3/6 h-[585px]">
            <Image
              src="/static/images/bias1.jpg"
              alt="Woman listening to someone talking"
              // className="object-cover"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateTraining;
