// import Link from 'next/link';
import Image from 'next/image';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = 'Corporate Training: Breaking Biases';

const CorporateTraining = () => {
  return (
    <>
      <div className="relative">
        <Head title={pageTitle} />
        <HeroBanner
          className="pt-0"
          backgroundImageSource="/static/images/heroImage.jpg"
          title={pageTitle}
        />
        <div className="absolute top-1/3 inset-0 flex items-center justify-center text-center mt-6">
          <p className="text-lg text-white max-w-[72%]">
            Operation Code has provided corporate training for tech employers since 2019. In order
            to break barriers and blockers for our military community, we must address the implicit
            and overt biases. Reach out to us if you would like more information on how our military
            cultural competency training works, if you&apos;d like us to help create a military
            Diversity, Equity, Inclusion and Belonging strategy, provide ongoing professional
            development or set up a military Employee Resource Group with you: Contact the{' '}
            <OutboundLink
              href="mailto:partnerships@operationcode.org"
              analyticsEventLabel="Email"
              hasIcon={false}
            >
              Partnerships Team
            </OutboundLink>
            . We look forward to hearing from you!
          </p>
        </div>
      </div>
      <div className="flex w-full bg-white">
        <div className="w-3/6 px-20 flex flex-col justify-center">
          <h6 className="text-xl tracking-[.05em]">Bias #1</h6>
          <h6 className="text-[28px] text-themeSecondary pt-1">
            All Veterans have PTSD or some form of mental illness
          </h6>
          <p className="text-base">
            The truth is that 28% of OIF/OEF/OND Vets self-reported one mental health diagnosis
            (NIH), and more than 1 in 5 adult civilians in the general population live with a mental
            illness (CDC).
          </p>
        </div>
        <div className="relative w-3/6 h-[585px]">
          <Image
            src="/static/images/bias1.jpg"
            alt="Woman listening to someone talking"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex w-full bg-themeGray800">
        <div className="relative w-3/6 h-[585px]">
          <Image
            src="/static/images/bias2.jpg"
            alt="Woman listening to someone talking"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-3/6 px-20 flex flex-col justify-center">
          <h6 className="text-xl tracking-[.05em]">Bias #2</h6>
          <h6 className="text-[28px] text-themeSecondary pt-1">
            Veterans are violent and unsafe to be around
          </h6>
          <p className="text-base">
            The truth is that TV, movies and sensationalized media propels these violent
            stereotypes. The truth: the incarceration rate for Vets is lower than for non-Vets
            (Bureau of Justice Statistics). Access to mental health resources & reducing stigma
            reduces the rate of criminalization for all.
          </p>
        </div>
      </div>
      <div className="flex w-full bg-white">
        <div className="w-3/6 px-20 flex flex-col justify-center">
          <h6 className="text-xl tracking-[.05em]">Bias #3</h6>
          <h6 className="text-[28px] text-themeSecondary pt-1">
            Vets come from low income means, are uneducated or joined out of desperation
          </h6>
          <p className="text-base">
            Technological, tactical, and strategic planning focuses on raising the bar for recruits.
            The truth is the majority of new recruits come from median family income & cognitive
            skills, equal to or greater than civilians (Journal of Strategic Studies).
          </p>
        </div>
        <div className="relative w-3/6 h-[585px]">
          <Image
            src="/static/images/bias3.jpg"
            alt="Woman listening to someone talking"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex w-full bg-themeGray800">
        <div className="relative w-3/6 h-[585px]">
          <Image
            src="/static/images/bias4.jpg"
            alt="Woman listening to someone talking"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-3/6 px-20 flex flex-col justify-center">
          <h6 className="text-xl tracking-[.05em]">Bias #4</h6>
          <h6 className="text-[28px] text-themeSecondary pt-1">
            Reserve and National Guard Service Members are part-time warriors and not able to focus
            on civilian careers.
          </h6>
          <p className="text-base">
            Reserve and National Guard members face a new challenge: bias from civilian coworkers
            and hiring managers{' '}
            <a href="https://www.military.com/" target="_blank" rel="noopener noreferrer">
              military.com
            </a>
            . The truth: work cultures that promote and support Reserve and NG members retain
            loyalty, increased productivity & diversity and sets an example for employees to define
            exemplary service to others.
          </p>
        </div>
      </div>
      <div className="flex w-full bg-white">
        <div className="w-3/6 px-20 flex flex-col justify-center">
          <h6 className="text-xl tracking-[.05em]">Bias #5</h6>
          <h6 className="text-[28px] text-themeSecondary pt-1">
            Military and Veteran spouses choose not to work and enjoy being dependents
          </h6>
          <p className="text-base">
            There are ~ 11.5M military and Veteran spouses. The under-employment and unemployment
            rate is ~13%, over 3X the national rate [
            <a
              href="https://www.dol.gov/sites/dolgov/files/WB/mib/WB-MilSpouse-factsheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Labor, Women&apos;s Bureau
            </a>
            ]. The Truth: to support our Vets, in their return to the civilian workforce, we MUST
            support their spouses and family members.
          </p>
        </div>
        <div className="relative w-3/6 h-[585px]">
          <Image
            src="/static/images/bias5.jpg"
            alt="Woman listening to someone talking"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default CorporateTraining;
