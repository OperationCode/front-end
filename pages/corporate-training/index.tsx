import Image from 'next/image';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import type { ReactNode } from 'react';
import classNames from 'classnames';

const pageTitle = 'Corporate Training: Breaking Biases';

interface Bias {
  title: string;
  subtitle: string;
  description: ReactNode;
  image: string;
  alt: string;
}

const biases: Bias[] = [
  {
    title: 'Bias #1',
    subtitle: 'All Veterans have PTSD or some form of mental illness',
    description: (
      <>
        The truth is that 28% of OIF/OEF/OND Vets self-reported one mental health diagnosis (NIH),
        and more than 1 in 5 adult civilians in the general population live with a mental illness
        (CDC).
      </>
    ),
    image: '/static/images/bias1.jpg',
    alt: 'soldier sitting on the couch with his head resting on his hands.',
  },
  {
    title: 'Bias #2',
    subtitle: 'Veterans are violent and unsafe to be around',
    description: (
      <>
        The truth is that TV, movies and sensationalized media propels these violent stereotypes.
        The truth: the incarceration rate for Vets is lower than for non-Vets (Bureau of Justice
        Statistics). Access to mental health resources & reducing stigma reduces the rate of
        criminalization for all.
      </>
    ),
    image: '/static/images/bias2.jpg',
    alt: 'A soldier getting comforted.',
  },
  {
    title: 'Bias #3',
    subtitle: 'Vets come from low income means, are uneducated or joined out of desperation',
    description: (
      <>
        Technological, tactical, and strategic planning focuses on raising the bar for recruits. The
        truth is the majority of new recruits come from median family income & cognitive skills,
        equal to or greater than civilians (Journal of Strategic Studies).
      </>
    ),
    image: '/static/images/bias3.jpg',
    alt: 'A homeless vet holding a sign for help.',
  },
  {
    title: 'Bias #4',
    subtitle:
      'Reserve and National Guard Service Members are part-time warriors and not able to focus on civilian careers.',
    description: (
      <>
        Reserve and National Guard members face a new challenge: bias from civilian coworkers and
        hiring managers{' '}
        <OutboundLink
          href="https://www.military.com/"
          analyticsEventLabel="Bias #4 Source Link"
          hasIcon={false}
        >
          military.com
        </OutboundLink>
        . The truth: work cultures that promote and support Reserve and NG members retain loyalty,
        increased productivity & diversity and sets an example for employees to define exemplary
        service to others.
      </>
    ),
    image: '/static/images/bias4.jpg',
    alt: 'A soldier shaking hands with someone.',
  },
  {
    title: 'Bias #5',
    subtitle: 'Military and Veteran spouses choose not to work and enjoy being dependents',
    description: (
      <>
        There are ~ 11.5M military and Veteran spouses. The under-employment and unemployment rate
        is ~13%, over 3X the national rate{' '}
        <span className="inline-block whitespace-normal">
          [
          <OutboundLink
            href="https://www.dol.gov/sites/dolgov/files/WB/mib/WB-MilSpouse-factsheet.pdf"
            analyticsEventLabel="Bias #5 Source Link"
            hasIcon={false}
          >
            Department of Labor, Women&apos;s Bureau
          </OutboundLink>
          ]
        </span>
        . The Truth: to support our Vets, in their return to the civilian workforce, we MUST support
        their spouses and family members.
      </>
    ),
    image: '/static/images/bias5.jpg',
    alt: 'two wedding rights resting on an american flad patch.',
  },
];

const CorporateTraining = () => {
  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner
        className="py-12"
        backgroundImageSource="/static/images/heroImage.jpg"
        title="Corporate Training: Breaking Biases"
      >
        <p className="text-left">
          Operation Code has provided corporate training for tech employers since 2019. In order to
          break barriers and blockers for our military community, we must address the implicit and
          overt biases. Reach out to us if you would like more information on how our military
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
          .<span className="block mt-4">We look forward to hearing from you!</span>
        </p>
      </HeroBanner>
      <ol className="flex flex-col w-full list-none">
        {biases.map(bias => (
          <li
            key={bias.title}
            className={classNames(
              'flex md:even:flex-row-reverse md:flex-row flex-col-reverse flex-wrap md:flex-nowrap md:[&>*]:flex-1',
              'even:bg-themeSecondary even:text-white', // mobile alternating colors per li
              'md:[&:nth-child(1n)]:bg-white md:[&:nth-child(2n)]:bg-themeGray800 md:[&:nth-child(3n)]:bg-themeSecondary md:[&:nth-child(1n)]:text-themeSecondary md:[&:nth-child(3n)]:text-white', // non-mobile alternating colors per li
            )}
          >
            <article className="flex flex-col items-center justify-center text-left">
              <div className="p-10 max-w-prose">
                <h3 className="flex flex-col gap-2 mb-4">
                  <span className="block text-2xl tracking-tight">{bias.title}</span>
                  <span className="tracking-wider leading-8">{bias.subtitle}</span>
                </h3>

                <p>{bias.description}</p>
              </div>
            </article>

            <div
              className={classNames(
                'relative h-64 w-64 mx-auto mt-10 mb-2 md:m-0 md:aspect-square 2xl:aspect-[4/2] md:h-auto md:w-auto',
                "before:content-[''] before:absolute before:top-2 before:left-2 before:w-full before:h-full before:bg-themePrimary", // mobile only bg square
                'md:before:content-[unset]',
              )}
            >
              <Image
                src={bias.image}
                alt={bias.alt}
                layout="fill"
                objectFit="cover"
                className="2xl:object-[75%_0%]"
              />
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default CorporateTraining;
