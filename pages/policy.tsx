import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';

function Policy() {
  return (
    <div>
      <Head title="Policy" />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/policy.jpg`}
        title="Modernize the GI Bill"
        className="min-h-dvh"
      >
        <h6>
          We demanded that Congress develop policies to make veterans more competitive for careers
          in the tech sector. Mission accomplished!
        </h6>

        <div className="flex flex-col font-primary mt-12">
          <figure className="bg-[rgba(0,5,30,0.7)] flex m-0 p-2 max-w-[370px]">
            <div className="flex items-center grow shrink-0 text-primary text-[2rem] leading-[2rem] lg:text-[2.5rem] lg:leading-[2.5rem] pr-4 pl-2 md:grow-0">
              2%
            </div>
            <div className="text-white text-2xl leading-[1.7rem]">
              Percentage of the tech industry that are veterans.
            </div>
          </figure>

          <figure className="bg-[rgba(0,5,30,0.7)] flex m-0 p-2 max-w-[500px] mt-4">
            <div className="flex items-center grow shrink-0 text-primary text-[2rem] leading-[2rem] lg:text-[2.5rem] lg:leading-[2.5rem] pr-4 pl-2 md:grow-0">
              1,600,000+
            </div>
            <div className="text-white text-2xl leading-[1.7rem]">
              Software development job postings between 2016 and 2017.
            </div>
          </figure>
        </div>
      </HeroBanner>
    </div>
  );
}

export default Policy;
